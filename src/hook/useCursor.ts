import { useCursorEvent } from "$/hook/useCursorEvent";
import {
  useEffectDebounce,
  useElementBounding,
  useEventListener,
  useMouse,
  useMutationObserver,
  useTween,
  useSpring,
} from "@kaioken-core/hooks";
import { useCallback, useEffect, useRef, useState } from "kaioken";

export const useCursor = () => {
  const { mouse } = useMouse();

  const cursorRef = useRef<HTMLElement>(null);
  const bounding = useElementBounding(cursorRef);
  const [x, setX] = useSpring(0, {
    stiffness: 0.2,
    damping: 0.8,
  });
  const [y, setY] = useSpring(0, {
    stiffness: 0.2,
    damping: 0.8,
  });
  const [width, setWidth] = useTween(40, { duration: 100 });
  const [height, setHeight] = useTween(40, { duration: 100 });
  const [rounded, setRounded] = useTween(9999, { duration: 100 });
  const [opacity, setOpacity] = useTween(0, { duration: 100 });
  const [scale, setScale] = useTween(1, { duration: 100 });
  const [color, setColor] = useState("#E9AA52");
  const mainRef = useRef<HTMLElement>(null);

  const onMouseOver = useCallback(
    (event: MouseEvent) => {
      if (
        event.target instanceof HTMLParagraphElement ||
        event.target instanceof HTMLHeadingElement
      ) {
        setOpacity(0.5);
      } else {
        setOpacity(1);
      }

      if (event.target instanceof HTMLElement) {
        const styles = window.getComputedStyle(event.target);
        if (styles.cursor === "pointer") {
          cursorRef.current = event.target;
          setRounded(parseInt(styles.borderRadius));
        } else {
          cursorRef.current = null;
          setRounded(9999);
        }
        bounding.update();
      }
    },
    [setRounded]
  );

  useEffect(() => {
    if (bounding.x && bounding.y) {
      setX(bounding.x + bounding.width / 2);
      setY(bounding.y + bounding.height / 2);
      setWidth(bounding.width);
      setHeight(bounding.height);
    } else {
      setX(mouse.x, {
        hard: opacity != 1,
      });
      setY(mouse.y, {
        hard: opacity != 1,
      });
      setWidth(40);
      setHeight(40);
    }
  }, [mouse]);

  const onMouseDown = useCallback(() => {
    if (
      cursorRef.current?.hasAttribute("href") ||
      cursorRef.current?.hasAttribute("onclick") ||
      cursorRef.current == null
    ) {
      setScale(0.8);
    }
  }, [cursorRef.current, setScale]);

  const onMouseUp = useCallback(() => {
    setScale(1);
  }, [cursorRef.current, setScale]);

  const onMouseMove = useCallback(() => {
    if (opacity === 0) {
      setOpacity(1);
    }
  }, [opacity]);

  useEventListener("mouseover", onMouseOver, {});
  useEventListener("mousedown", onMouseDown, {});
  useEventListener("mouseup", onMouseUp, {});
  useEventListener("dragend", onMouseUp, {});
  useEventListener("mousemove", onMouseMove, {});

  useEffect(() => {
    mainRef.current = document.querySelector("main");
  }, []);

  useEffectDebounce(
    () => {
      if (cursorRef.current == null) {
        setOpacity(0);
      }
    },
    [x, y],
    {
      maxWait: 3000,
    }
  );

  useCursorEvent("color", (newColor: string | null) => {
    setColor(newColor ?? "#E9AA52");
  });

  const onMutation = useCallback(() => {
    bounding?.update?.();
  }, []);

  useMutationObserver(mainRef, onMutation, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });

  return {
    bounding,
    width,
    height,
    x,
    y,
    opacity,
    scale,
    color,
    rounded,
  };
};
