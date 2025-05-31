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
import { HookDebugGroupAction, useCallback, useEffect, useHookDebugGroup, useRef, useState } from "kaioken";

export const useCursor = () => {
  useHookDebugGroup('Mouse', HookDebugGroupAction.Start)
  const { mouse } = useMouse();
  useHookDebugGroup('Mouse', HookDebugGroupAction.End)

  const cursorRef = useRef<HTMLElement | null>(null);
  useHookDebugGroup('Bounding', HookDebugGroupAction.Start)
  const bounding = useElementBounding(cursorRef);
  useHookDebugGroup('Bounding', HookDebugGroupAction.End)
  useHookDebugGroup('X', HookDebugGroupAction.Start)
  const [x, setX] = useSpring(0, {
    stiffness: 0.2,
    damping: 0.8,
  });
  useHookDebugGroup('X', HookDebugGroupAction.End)
  useHookDebugGroup('Y', HookDebugGroupAction.Start)
  const [y, setY] = useSpring(0, {
    stiffness: 0.2,
    damping: 0.8,
  });
  useHookDebugGroup('Y', HookDebugGroupAction.End)
  useHookDebugGroup('Width', HookDebugGroupAction.Start)
  const [width, setWidth] = useTween(40, { duration: 100 });
  useHookDebugGroup('Width', HookDebugGroupAction.End)
  useHookDebugGroup('Height', HookDebugGroupAction.Start)
  const [height, setHeight] = useTween(40, { duration: 100 });
  useHookDebugGroup('Height', HookDebugGroupAction.End)
  useHookDebugGroup('Rounded', HookDebugGroupAction.Start)
  const [rounded, setRounded] = useTween(9999, { duration: 100 });
  useHookDebugGroup('Rounded', HookDebugGroupAction.End)
  useHookDebugGroup('Opacity', HookDebugGroupAction.Start)
  const [opacity, setOpacity] = useTween(0, { duration: 100 });
  useHookDebugGroup('Opacity', HookDebugGroupAction.End)
  useHookDebugGroup('Scale', HookDebugGroupAction.Start)
  const [scale, setScale] = useTween(1, { duration: 100 });
  useHookDebugGroup('Scale', HookDebugGroupAction.End)
  useHookDebugGroup('Color', HookDebugGroupAction.Start)
  const [color, setColor] = useState("#E9AA52");
  useHookDebugGroup('Color', HookDebugGroupAction.End)
  const mainRef = useRef<HTMLElement | null>(null);

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

  useHookDebugGroup('Events', HookDebugGroupAction.Start)
  useEventListener("mouseover", onMouseOver, {});
  useEventListener("mousedown", onMouseDown, {});
  useEventListener("mouseup", onMouseUp, {});
  useEventListener("dragend", onMouseUp, {});
  useEventListener("mousemove", onMouseMove, {});
  useHookDebugGroup('Events', HookDebugGroupAction.End)

  useEffect(() => {
    mainRef.current = document.querySelector("main");
  }, []);

  useEffectDebounce(
    () => {
      if (cursorRef.current == null) {
        setOpacity(0);
      }
      console.log('called')
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

  useHookDebugGroup('Mutation Observer', HookDebugGroupAction.Start)
  useMutationObserver(mainRef, onMutation, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
  useHookDebugGroup('Mutation Observer', HookDebugGroupAction.End)

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
