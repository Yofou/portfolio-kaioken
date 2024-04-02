import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigsSerialized = [
  {
    pageId: "/src/pages/blogs",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/blogs", "definedBy": "/src/pages/blogs/" },
    loadConfigValuesAll: () => import("./entries/src_pages_blogs.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/src/pages/blogs/cursor",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/blogs/cursor", "definedBy": "/src/pages/blogs/cursor/" },
    loadConfigValuesAll: () => import("./entries/src_pages_blogs_cursor.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/src/pages/index/" },
    loadConfigValuesAll: () => import("./entries/src_pages_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  }
];
const pageConfigGlobalSerialized = {
  configValuesImported: []
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{005}~.js": {
    "file": "assets/static/HrTtitle.CVMpZHSr.css",
    "src": "_chunk-!~{005}~.js"
  },
  "_chunk-!~{006}~.js": {
    "file": "assets/static/BlogsCarousel.ni5-5DY3.css",
    "src": "_chunk-!~{006}~.js"
  },
  "_chunk-CkpQdPyg.js": {
    "file": "assets/chunks/chunk-CkpQdPyg.js",
    "imports": [
      "_chunk-Cn8j4NMd.js"
    ],
    "css": [
      "assets/static/BlogsCarousel.ni5-5DY3.css"
    ]
  },
  "_chunk-Cn8j4NMd.js": {
    "file": "assets/chunks/chunk-Cn8j4NMd.js",
    "css": [
      "assets/static/HrTtitle.CVMpZHSr.css"
    ],
    "assets": [
      "assets/static/merriweather-cyrillic-ext-400-normal.2Q04MDyi.woff2",
      "assets/static/merriweather-cyrillic-ext-400-normal.CZtPT8sU.woff",
      "assets/static/merriweather-cyrillic-400-normal.BVsZi-3f.woff2",
      "assets/static/merriweather-cyrillic-400-normal.BzzSMLri.woff",
      "assets/static/merriweather-vietnamese-400-normal.DN7nXmm7.woff2",
      "assets/static/merriweather-vietnamese-400-normal.BchaKGL9.woff",
      "assets/static/merriweather-latin-ext-400-normal.DH_FFfA1.woff2",
      "assets/static/merriweather-latin-ext-400-normal.BWXNz8rE.woff",
      "assets/static/merriweather-latin-400-normal.Dlx1w5Ul.woff2",
      "assets/static/merriweather-latin-400-normal.6ZmT0F6M.woff",
      "assets/static/merriweather-cyrillic-ext-700-normal.Babi87f-.woff2",
      "assets/static/merriweather-cyrillic-ext-700-normal.D5vnpbgV.woff",
      "assets/static/merriweather-cyrillic-700-normal.rgxhLSfj.woff2",
      "assets/static/merriweather-cyrillic-700-normal.BYeMyvve.woff",
      "assets/static/merriweather-vietnamese-700-normal.BIskZwAq.woff2",
      "assets/static/merriweather-vietnamese-700-normal.PDG6c8Dt.woff",
      "assets/static/merriweather-latin-ext-700-normal.C7IhDzgl.woff2",
      "assets/static/merriweather-latin-ext-700-normal.DLeVmk_p.woff",
      "assets/static/merriweather-latin-700-normal.DGwZkYjf.woff2",
      "assets/static/merriweather-latin-700-normal.BqSr6-RI.woff"
    ]
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-400-normal.woff": {
    "file": "assets/static/fira-mono-cyrillic-400-normal.Dq7SlH2J.woff",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-400-normal.woff2": {
    "file": "assets/static/fira-mono-cyrillic-400-normal.36-45Uyg.woff2",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-ext-400-normal.woff": {
    "file": "assets/static/fira-mono-cyrillic-ext-400-normal.0xXfcOOq.woff",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-ext-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-ext-400-normal.woff2": {
    "file": "assets/static/fira-mono-cyrillic-ext-400-normal.B04YIrm4.woff2",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-cyrillic-ext-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-400-normal.woff": {
    "file": "assets/static/fira-mono-greek-400-normal.DUeQbRz0.woff",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-400-normal.woff2": {
    "file": "assets/static/fira-mono-greek-400-normal.C3zng6O6.woff2",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-ext-400-normal.woff": {
    "file": "assets/static/fira-mono-greek-ext-400-normal.BEhC8Nsh.woff",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-ext-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-ext-400-normal.woff2": {
    "file": "assets/static/fira-mono-greek-ext-400-normal.CsqI23CO.woff2",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-greek-ext-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-400-normal.woff": {
    "file": "assets/static/fira-mono-latin-400-normal.g4W12wf9.woff",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-400-normal.woff2": {
    "file": "assets/static/fira-mono-latin-400-normal.DKjLVgQi.woff2",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-ext-400-normal.woff": {
    "file": "assets/static/fira-mono-latin-ext-400-normal.CrDGr5zW.woff",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-ext-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-ext-400-normal.woff2": {
    "file": "assets/static/fira-mono-latin-ext-400-normal.D6XfiR-_.woff2",
    "src": "node_modules/.pnpm/@fontsource+fira-mono@5.0.12/node_modules/@fontsource/fira-mono/files/fira-mono-latin-ext-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-400-normal.woff": {
    "file": "assets/static/merriweather-cyrillic-400-normal.BzzSMLri.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-400-normal.woff2": {
    "file": "assets/static/merriweather-cyrillic-400-normal.BVsZi-3f.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-700-normal.woff": {
    "file": "assets/static/merriweather-cyrillic-700-normal.BYeMyvve.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-700-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-700-normal.woff2": {
    "file": "assets/static/merriweather-cyrillic-700-normal.rgxhLSfj.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-700-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-400-normal.woff": {
    "file": "assets/static/merriweather-cyrillic-ext-400-normal.CZtPT8sU.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-400-normal.woff2": {
    "file": "assets/static/merriweather-cyrillic-ext-400-normal.2Q04MDyi.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-700-normal.woff": {
    "file": "assets/static/merriweather-cyrillic-ext-700-normal.D5vnpbgV.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-700-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-700-normal.woff2": {
    "file": "assets/static/merriweather-cyrillic-ext-700-normal.Babi87f-.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-cyrillic-ext-700-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-400-normal.woff": {
    "file": "assets/static/merriweather-latin-400-normal.6ZmT0F6M.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-400-normal.woff2": {
    "file": "assets/static/merriweather-latin-400-normal.Dlx1w5Ul.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-700-normal.woff": {
    "file": "assets/static/merriweather-latin-700-normal.BqSr6-RI.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-700-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-700-normal.woff2": {
    "file": "assets/static/merriweather-latin-700-normal.DGwZkYjf.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-700-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-400-normal.woff": {
    "file": "assets/static/merriweather-latin-ext-400-normal.BWXNz8rE.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-400-normal.woff2": {
    "file": "assets/static/merriweather-latin-ext-400-normal.DH_FFfA1.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-700-normal.woff": {
    "file": "assets/static/merriweather-latin-ext-700-normal.DLeVmk_p.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-700-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-700-normal.woff2": {
    "file": "assets/static/merriweather-latin-ext-700-normal.C7IhDzgl.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-latin-ext-700-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-400-normal.woff": {
    "file": "assets/static/merriweather-vietnamese-400-normal.BchaKGL9.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-400-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-400-normal.woff2": {
    "file": "assets/static/merriweather-vietnamese-400-normal.DN7nXmm7.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-400-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-700-normal.woff": {
    "file": "assets/static/merriweather-vietnamese-700-normal.PDG6c8Dt.woff",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-700-normal.woff"
  },
  "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-700-normal.woff2": {
    "file": "assets/static/merriweather-vietnamese-700-normal.BIskZwAq.woff2",
    "src": "node_modules/.pnpm/@fontsource+merriweather@5.0.12/node_modules/@fontsource/merriweather/files/merriweather-vietnamese-700-normal.woff2"
  },
  "node_modules/.pnpm/vike@0.4.167_vite@5.1.1/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.Bk26b9uT.js",
    "src": "node_modules/.pnpm/vike@0.4.167_vite@5.1.1/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/src/pages/blogs",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/blogs/cursor",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/index"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/blogs": {
    "file": "assets/entries/src_pages_blogs.B6i_7j3-.js",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/blogs",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-Cn8j4NMd.js",
      "_chunk-CkpQdPyg.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/blogs/cursor": {
    "file": "assets/entries/src_pages_blogs_cursor.Df80Z4XO.js",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/blogs/cursor",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-Cn8j4NMd.js"
    ],
    "css": [
      "assets/static/cursor.Dwq1EbM-.css"
    ],
    "assets": [
      "assets/static/fira-mono-cyrillic-ext-400-normal.B04YIrm4.woff2",
      "assets/static/fira-mono-cyrillic-ext-400-normal.0xXfcOOq.woff",
      "assets/static/fira-mono-cyrillic-400-normal.36-45Uyg.woff2",
      "assets/static/fira-mono-cyrillic-400-normal.Dq7SlH2J.woff",
      "assets/static/fira-mono-greek-ext-400-normal.CsqI23CO.woff2",
      "assets/static/fira-mono-greek-ext-400-normal.BEhC8Nsh.woff",
      "assets/static/fira-mono-greek-400-normal.C3zng6O6.woff2",
      "assets/static/fira-mono-greek-400-normal.DUeQbRz0.woff",
      "assets/static/fira-mono-latin-ext-400-normal.D6XfiR-_.woff2",
      "assets/static/fira-mono-latin-ext-400-normal.CrDGr5zW.woff",
      "assets/static/fira-mono-latin-400-normal.DKjLVgQi.woff2",
      "assets/static/fira-mono-latin-400-normal.g4W12wf9.woff"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
    "file": "assets/entries/src_pages_index.CgWj9hNk.js",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-Cn8j4NMd.js",
      "_chunk-CkpQdPyg.js"
    ],
    "css": [
      "assets/static/index.CTe8DiQk.css"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.167",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
