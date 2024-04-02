import * as kaioken from "kaioken";
import { useRef, useEffect, useCallback } from "kaioken";
import EmblaCarousel from "embla-carousel";
import { useWindowSize } from "@kaioken-core/hooks";
import { e as emitter } from "./chunk-Bng90Um4.js";
const useEmbla = (ref, options) => {
  const embla = useRef(null);
  useEffect(() => {
    console.log("called", options.active);
    if (ref.current) {
      const plugins = (options == null ? void 0 : options.plugins) ?? [];
      embla.current = EmblaCarousel(ref.current, options, plugins);
    }
    return () => {
      var _a;
      (_a = embla.current) == null ? void 0 : _a.destroy();
    };
  }, [ref.current, options, options.active]);
  return [embla];
};
const metadata = [
  {
    title: "Forging a great cursor",
    description: `Join me on a journey to master the art of creating smooth, dynamic cursors. I'll guide you through the basics and set you on the path towards forging your own unique cursor implementations.`,
    thumbnail: "/blogs/cursor/thumbnail.jpeg",
    href: "/blogs/cursor",
    category: "frontend",
    createdAt: "12/26/2022"
  }
];
const NoBlogs = () => {
  return /* @__PURE__ */ kaioken.createElement("section", { className: "flex flex-col justify-center text-center gap-2" }, /* @__PURE__ */ kaioken.createElement("h2", { className: "text-[1.5rem] text-yellow-300 font-semibold" }, "No Blogs"), /* @__PURE__ */ kaioken.createElement("p", { className: "text-white/80 font-[1.3rem]" }, "but stay tuned, I got some coming on the way."));
};
const BlogCarousel = () => {
  const blogs = metadata;
  if (blogs.length === 0) {
    return /* @__PURE__ */ kaioken.createElement(NoBlogs, null);
  }
  const { width: innerWidth } = useWindowSize();
  const isMd = innerWidth > 768;
  const ref = useRef(null);
  useEmbla(ref, {
    align: "center",
    active: isMd,
    plugins: []
  });
  const onMouseOver = useCallback(() => {
    emitter.emit("carousel", true);
  }, []);
  const onMouseOut = useCallback((e) => {
    e.stopPropagation();
    emitter.emit("carousel", false);
  }, []);
  return /* @__PURE__ */ kaioken.createElement(
    "div",
    {
      className: "embla",
      ref,
      onmouseover: onMouseOver,
      onmouseout: onMouseOut
    },
    /* @__PURE__ */ kaioken.createElement("div", { className: "embla__carousel grid gap-4 grid-flow-row items-center md:grid-flow-col md:auto-cols-[540px]" }, blogs.map((blog) => {
      return /* @__PURE__ */ kaioken.createElement("div", { className: "embla__slide relative min-h-[450px] md:min-h-[700px] group overflow-hidden rounded-[10px] bg-purple-300" }, /* @__PURE__ */ kaioken.createElement(
        "img",
        {
          className: "absolute w-full h-full object-cover object-bottom pointer-events-none rounded-b-[100px]",
          src: blog.thumbnail,
          alt: ""
        }
      ), /* @__PURE__ */ kaioken.createElement("div", { className: "bg-purple-300 px-8 py-5 absolute z-10 bottom-0 w-full items-start min-h-[250px] translate-y-[100px] group-hocus-within:translate-y-[0px] flex flex-col transition-transform left-0" }, /* @__PURE__ */ kaioken.createElement("div", { className: "flex justify-between w-full md:items-center" }, /* @__PURE__ */ kaioken.createElement("h2", { className: "uppercase text-[1.1rem] md:text-[1.5rem] text-yellow-300" }, blog.title), /* @__PURE__ */ kaioken.createElement("p", { className: "text-yellow-300" }, blog.createdAt)), /* @__PURE__ */ kaioken.createElement("h2", { className: "uppercase px-2 py-1 mt-1 text-[0.8rem] bg-purple-600 w-full max-w-min rounded-full text-yellow-300" }, blog.category), /* @__PURE__ */ kaioken.createElement("p", { className: "mt-4 opacity-0 group-hocus-within:opacity-100 transition-opacity" }, blog.description), /* @__PURE__ */ kaioken.createElement(
        "a",
        {
          className: "mt-2 text-yellow-300 -translate-x-2 px-2 py-1 rounded-full underline lowercase opacity-0 group-hocus-within:opacity-100",
          href: blog.href
        },
        "Visit here"
      )));
    }))
  );
};
export {
  BlogCarousel as B
};
