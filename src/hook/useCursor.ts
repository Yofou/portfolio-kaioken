import { useCursorEvent } from "$/hook/useCursorEvent";
import {
  useEffectDebounce,
  useElementBounding,
  useEventListener,
  useMouse,
  useMutationObserver,
} from "@kaioken-core/hooks";
import { useCallback, useEffect, useRef, useState } from "kaioken";
import { useMotionState } from "./useMotionState";
import { spring } from "motion";


// TODO: Nathan oogaa boogaa, cause memory leak with anonymous event function
export const useCursor = () => {
  const { client } = useMouse();

  const cursorRef = useRef<HTMLElement>(null);
  const bounding = useElementBounding(cursorRef);
  const width = bounding.width === 0 ? 48 : bounding.width;
  const height = bounding.height === 0 ? 48 : bounding.height;
  const x = bounding.x === 0 ? client.x : bounding.x;
  const y = bounding.y === 0 ? client.y : bounding.y;
  const [rounded, setRounded] = useMotionState(9999, {
    duration: 0.1,
  });
  const [opacity, setOpacity] = useMotionState(0, {
    duration: 0.150,
  });
  const [scale, setScale] = useMotionState(1, {
    duration: 0,
  });
  const [color, setColor] = useState("#E9AA52");
  
  const onMouseOver = useCallback((event: MouseEvent) => {
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
  }, [setRounded, setOpacity])

  const onMouseDown = useCallback(() => {
    if (
      cursorRef.current?.hasAttribute("href") ||
      cursorRef.current?.hasAttribute("onclick") ||
      cursorRef.current == null
    ) {
      console.log('mouse down')
      setScale(0.8);
    }
  }, [cursorRef.current, setScale])

  const onMouseUp = useCallback(() => {
    console.log('mouse up')
    setScale(1)
  }, [cursorRef.current, setScale])

  useEventListener("mouseover", onMouseOver, {});
  useEventListener("mousedown", onMouseDown, {});
  useEventListener("mouseup", onMouseUp, {});

  const mainRef = useRef<HTMLElement>(null);
  useMutationObserver(
    mainRef,
    () => {
      bounding.update();
    },
    {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    }
  );

  useEffect(() => {
    mainRef.current = document.querySelector("main");
  }, []);

  useCursorEvent("color", (newColor: string | null) => {
    setColor(newColor ?? "#E9AA52");
  });

  const onMouseMove = useCallback(() => {
    if (opacity === 0) {
      setOpacity(1)
    }
  }, [opacity,setOpacity])

  useEventListener('mousemove', onMouseMove, { passive: true })

  useEffectDebounce(() => {
    if (cursorRef.current == null) {
      setOpacity(0);
    }
  }, [x, y], {
    maxWait: 3000,
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
  }
}
