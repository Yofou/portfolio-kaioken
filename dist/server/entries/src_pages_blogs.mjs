import { H as HrTitle, i as import_0 } from "../chunks/chunk-Bng90Um4.js";
import * as kaioken from "kaioken";
import { B as BlogCarousel } from "../chunks/chunk-BbETWG59.js";
import "vike/server";
import "tiny-emitter";
import "@kaioken-core/hooks";
import "svelte/motion";
import "svelte/store";
import "embla-carousel";
const Page = () => {
  return /* @__PURE__ */ kaioken.createElement(kaioken.fragment, null, /* @__PURE__ */ kaioken.createElement(HrTitle, null, "Blogs"), /* @__PURE__ */ kaioken.createElement(BlogCarousel, null));
};
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/src/renderer/+onRenderHtml.tsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/src/pages/blogs/+Page.tsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/src/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["routeParams","Layout"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
