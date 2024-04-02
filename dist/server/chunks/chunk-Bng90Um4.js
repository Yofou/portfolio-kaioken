import * as kaioken from "kaioken";
import { useEffect, shouldExecHook, useHook, useRef, useState, useCallback, Transition, children, createContext, renderToString } from "kaioken";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { TinyEmitter } from "tiny-emitter";
import { useMouse, useElementBounding, useEventListener, useEffectDebounce, useMutationObserver, useWindowSize } from "@kaioken-core/hooks";
import { tweened, spring } from "svelte/motion";
import { get } from "svelte/store";
function getTitle(pageContext) {
  const val = pageContext.config.title;
  if (typeof val === "function") {
    return val(pageContext);
  }
  return val || "My Site";
}
const emitter = new TinyEmitter();
const useCursorEvent = (eventName, callback) => {
  useEffect(() => {
    emitter.on(eventName, callback);
    return () => emitter.off(eventName, callback);
  }, []);
};
const useTweenState = (baseValue, baseOption) => {
  if (!shouldExecHook()) {
    return [baseValue instanceof Function ? baseValue() : baseValue, async () => {
    }];
  }
  return useHook(
    "useTweenState",
    {
      state: void 0
    },
    ({ hook, oldHook, update }) => {
      if (!oldHook) {
        hook.state = tweened(
          baseValue instanceof Function ? baseValue() : baseValue,
          baseOption
        );
        hook.cleanup = hook.state.subscribe((_) => {
          update();
        });
      }
      return [get(hook.state), hook.state.set];
    }
  );
};
const useSpringState = (baseValue, baseOption) => {
  if (!shouldExecHook()) {
    return [baseValue instanceof Function ? baseValue() : baseValue, async () => {
    }];
  }
  return useHook(
    "useSpringState",
    {
      state: void 0
    },
    ({ hook, oldHook, update }) => {
      if (!oldHook) {
        hook.state = spring(
          baseValue instanceof Function ? baseValue() : baseValue,
          baseOption
        );
        hook.cleanup = hook.state.subscribe((_) => {
          update();
        });
      }
      return [get(hook.state), hook.state.set];
    }
  );
};
const useCursor = () => {
  const { mouse } = useMouse();
  const cursorRef = useRef(null);
  const bounding = useElementBounding(cursorRef);
  const [x, setX] = useSpringState(0, {
    stiffness: 0.2,
    damping: 0.8
  });
  const [y, setY] = useSpringState(0, {
    stiffness: 0.2,
    damping: 0.8
  });
  const [width, setWidth] = useTweenState(40, { duration: 100 });
  const [height, setHeight] = useTweenState(40, { duration: 100 });
  const [rounded, setRounded] = useTweenState(9999, { duration: 100 });
  const [opacity, setOpacity] = useTweenState(0, { duration: 100 });
  const [scale, setScale] = useTweenState(1, { duration: 100 });
  const [color, setColor] = useState("#E9AA52");
  const mainRef = useRef(null);
  const onMouseOver = useCallback(
    (event) => {
      if (event.target instanceof HTMLParagraphElement || event.target instanceof HTMLHeadingElement) {
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
        hard: opacity != 1
      });
      setY(mouse.y, {
        hard: opacity != 1
      });
      setWidth(40);
      setHeight(40);
    }
  }, [mouse]);
  const onMouseDown = useCallback(() => {
    var _a, _b;
    if (((_a = cursorRef.current) == null ? void 0 : _a.hasAttribute("href")) || ((_b = cursorRef.current) == null ? void 0 : _b.hasAttribute("onclick")) || cursorRef.current == null) {
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
      maxWait: 3e3
    }
  );
  useCursorEvent("color", (newColor) => {
    setColor(newColor ?? "#E9AA52");
  });
  const onMutation = useCallback(() => {
    var _a;
    (_a = bounding == null ? void 0 : bounding.update) == null ? void 0 : _a.call(bounding);
  }, []);
  useMutationObserver(mainRef, onMutation, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
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
    rounded
  };
};
const CursorArrow = ({ className, style }) => {
  return /* @__PURE__ */ kaioken.createElement(
    "svg",
    {
      className: `w-6 h-6 text-yellow-300 absolute top-1/2 caret ${className}`,
      style,
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ kaioken.createElement(
      "path",
      {
        d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
        fill: "currentColor",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd"
      }
    )
  );
};
const Cursor = () => {
  const { x, y, width, height, rounded, opacity, scale, color } = useCursor();
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  useCursorEvent("carousel", (value) => {
    setIsHoveringCarousel(value);
  });
  return /* @__PURE__ */ kaioken.createElement(
    "div",
    {
      className: `
      w-12 
      h-12 
      fixed 
      top-0 
      left-0 
      pointer-events-none 
      cursor
    `,
      style: `
      --x: ${x}px;
      --y: ${y}px;
      --width: ${width}px;
      --height: ${height}px;
      --rounded: ${rounded}px;
      --scale: ${scale};
      --color: ${color ?? "unset"};
      --opacity: ${opacity}
    `
    },
    /* @__PURE__ */ kaioken.createElement(
      Transition,
      {
        in: isHoveringCarousel,
        timings: [150, 0, 150, 0],
        element: (state) => {
          if (state === "exited")
            return null;
          const additionalClass = `cursor-${state}`;
          return /* @__PURE__ */ kaioken.createElement(CursorArrow, { className: `left-[-28px]  ${additionalClass}` });
        }
      }
    ),
    /* @__PURE__ */ kaioken.createElement(
      Transition,
      {
        in: isHoveringCarousel,
        timings: [150, 0, 150, 0],
        element: (state) => {
          if (state === "exited")
            return null;
          const additionalClass = `cursor-${state}`;
          return /* @__PURE__ */ kaioken.createElement(
            CursorArrow,
            {
              className: `right-[-28px] ${additionalClass}`,
              style: "--rotate: 180deg"
            }
          );
        }
      }
    )
  );
};
const Nav = () => {
  return /* @__PURE__ */ kaioken.createElement(kaioken.fragment, null, /* @__PURE__ */ kaioken.createElement(
    "nav",
    {
      className: "\n        grid grid-cols-[repeat(2,max-content),1fr,max-content]\n        gap-4\n        mb-10\n        -translate-x-2\n      "
    },
    /* @__PURE__ */ kaioken.createElement(
      "a",
      {
        className: "\n        	  font-semibold\n            rounded-full\n        	  hover:text-yellow-300 hover:underline\n        	  px-2\n        	  py-1\n      	  ",
        href: "/"
      },
      "Home"
    ),
    /* @__PURE__ */ kaioken.createElement(
      "a",
      {
        className: "\n            font-semibold\n            rounded-full\n            hover:text-yellow-300 hover:underline\n            px-2\n            py-1\n          ",
        href: "/blogs"
      },
      "Blogs"
    ),
    /* @__PURE__ */ kaioken.createElement("a", { className: "justify-self-end", href: "https://github.com/Yofou" }, /* @__PURE__ */ kaioken.createElement(
      "img",
      {
        className: "w-[30px] h-[30px] rounded-full",
        src: "/icons/github.svg",
        alt: "Github Profiled",
        width: "150",
        height: "150"
      }
    )),
    /* @__PURE__ */ kaioken.createElement("a", { href: "https://www.linkedin.com/in/nathan-ewen-b86315182/" }, /* @__PURE__ */ kaioken.createElement(
      "img",
      {
        className: "w-[30px] h-[30px] rounded-[5px]",
        src: "/icons/linkedin.svg",
        alt: "Linked in Profile",
        width: "150",
        height: "150"
      }
    ))
  ));
};
const LayoutDefault = (props) => {
  const { width } = useWindowSize();
  const isDesktop = width ? width > 691 : false;
  return /* @__PURE__ */ kaioken.createElement(kaioken.fragment, null, /* @__PURE__ */ kaioken.createElement("main", { className: "\n      w-full\n      min-h-screen\n      grid-flow-row\n      auto-rows-max\n      grid grid-cols-container\n      py-20\n      px-4\n      text-white\n      selection:bg-purple-500\n    " }, /* @__PURE__ */ kaioken.createElement("h1", { className: "sr-only" }, props.title), /* @__PURE__ */ kaioken.createElement(Nav, null), children()), isDesktop && /* @__PURE__ */ kaioken.createElement(Cursor, null));
};
const Context = createContext(null);
function PageContextProvider({
  pageContext,
  children: children2
}) {
  var _a;
  return /* @__PURE__ */ kaioken.createElement(
    Context.Provider,
    {
      value: { ...pageContext, isClient: !!((_a = globalThis.window) == null ? void 0 : _a.location) }
    },
    children2
  );
}
function PageShell({
  pageContext,
  children: children2
}) {
  const PageLayout = pageContext.config.Layout;
  return /* @__PURE__ */ kaioken.createElement(PageContextProvider, { pageContext }, /* @__PURE__ */ kaioken.createElement(LayoutDefault, null, PageLayout ? /* @__PURE__ */ kaioken.createElement(PageLayout, null, children2) : children2));
}
function App({ pageContext }) {
  const { Page, data = {} } = pageContext;
  return /* @__PURE__ */ kaioken.createElement(PageShell, { pageContext }, /* @__PURE__ */ kaioken.createElement(Page, { ...data }));
}
const onRenderHtml = async (pageContext) => {
  const pageHtml = renderToString(App, { pageContext });
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" href="/favicon.svg">
        <title>${getTitle(pageContext)}</title>
      </head>
      <body>
        <div id="page-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
const HrTitle = () => {
  return /* @__PURE__ */ kaioken.createElement("div", { className: "relative my-12" }, /* @__PURE__ */ kaioken.createElement("h2", { className: "absolute text-center top-1/2 left-1/2 -translate-x-1/2 bg-[#16131d] px-3 text-yellow-300 font-semibold -translate-y-1/2" }, children()), /* @__PURE__ */ kaioken.createElement("div", { className: "w-full h-[2px] bg-yellow-300" }));
};
export {
  HrTitle as H,
  emitter as e,
  import_0 as i
};
