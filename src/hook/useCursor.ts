import { useCursorEvent } from "$/hook/useCursorEvent";
import {
  useEffectDebounce,
  useElementBounding,
  useEventListener,
  useMouse,
  useMutationObserver,
  useSpring,
  useTween
} from "@kaioken-core/hooks";
import { HookDebugGroupAction, useCallback, useEffect, useHookDebugGroup, useRef, useSignal, useWatch } from "kaioken";

export const useCursor = () => {
  useHookDebugGroup('Mouse', HookDebugGroupAction.Start)
  const { mouse } = useMouse();
  useHookDebugGroup('Mouse', HookDebugGroupAction.End)

  const cursorRef = useRef<HTMLElement | null>(null);
  useHookDebugGroup('Bounding', HookDebugGroupAction.Start)
  const bounding = useElementBounding(cursorRef);
  useHookDebugGroup('Bounding', HookDebugGroupAction.End)
  useHookDebugGroup('X', HookDebugGroupAction.Start)
  const x = useSpring(0, {
    stiffness: 0.2,
    damping: 0.8,
  });
  useHookDebugGroup('X', HookDebugGroupAction.End)
  useHookDebugGroup('Y', HookDebugGroupAction.Start)
  const y = useSpring(0, {
    stiffness: 0.2,
    damping: 0.8,
  });
  useHookDebugGroup('Y', HookDebugGroupAction.End)
  useHookDebugGroup('Width', HookDebugGroupAction.Start)
  const width = useTween(40, { duration: 100 });
  useHookDebugGroup('Width', HookDebugGroupAction.End)
  useHookDebugGroup('Height', HookDebugGroupAction.Start)
  const height = useTween(40, { duration: 100 });
  useHookDebugGroup('Height', HookDebugGroupAction.End)
  useHookDebugGroup('Rounded', HookDebugGroupAction.Start)
  const rounded = useTween(9999, { duration: 100 });
  useHookDebugGroup('Rounded', HookDebugGroupAction.End)
  useHookDebugGroup('Opacity', HookDebugGroupAction.Start)
  const opacity = useTween(0, { duration: 100 });
  useHookDebugGroup('Opacity', HookDebugGroupAction.End)
  useHookDebugGroup('Scale', HookDebugGroupAction.Start)
  const scale = useTween(1, { duration: 100 });
  useHookDebugGroup('Scale', HookDebugGroupAction.End)
  useHookDebugGroup('Color', HookDebugGroupAction.Start)
  const color = useSignal("#E9AA52");
  useHookDebugGroup('Color', HookDebugGroupAction.End)
  const mainRef = useRef<HTMLElement | null>(null);

  const onMouseOver = useCallback(
    (event: MouseEvent) => {
      if (
        event.target instanceof HTMLParagraphElement ||
        event.target instanceof HTMLHeadingElement
      ) {
        opacity.set(0.5)
      } else {
        opacity.set(1)
      }

      if (event.target instanceof HTMLElement) {
        const styles = window.getComputedStyle(event.target);
        if (styles.cursor === "pointer") {
          cursorRef.current = event.target;
          rounded.set(
            parseInt(styles.borderRadius)
          )
        } else {
          cursorRef.current = null;
          rounded.set(
            9999
          )
        }
        bounding.update();
      }
    },
    []
  );

  useWatch(() => {
    if (bounding.x.value && bounding.y.value) {
      x.set(bounding.x.value + bounding.width.value / 2)
      y.set(bounding.y.value + bounding.height.value / 2)
      width.set(bounding.width.value)
      height.set(bounding.height.value)
    } else {
      x.set(mouse.value.x, {
        hard: opacity.value != 1
      })
      y.set(mouse.value.y, {
        hard: opacity.value != 1
      })

      width.set(40)
      height.set(40)
    }
  });

  const onMouseDown = useCallback(() => {
    if (
      cursorRef.current?.hasAttribute("href") ||
      cursorRef.current?.hasAttribute("onclick") ||
      cursorRef.current == null
    ) {
      scale.set(0.8)
    }
  }, []);

  const onMouseUp = useCallback(() => {
    scale.set(1)
  }, []);

  const onMouseMove = useCallback(() => {
    if (opacity.value === 0) {
      opacity.set(1)
    }
  }, []);

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
        opacity.set(0)
      }
    },
    [x.value, y.value],
    {
      maxWait: 3000,
    }
  );

  useCursorEvent("color", (newColor: string | null) => {
    color.value = newColor ?? "#E9AA52"
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
