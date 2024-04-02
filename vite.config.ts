import path from "node:path";
import { defineConfig } from "vite";
import ssr from "vike/plugin";
import kaioken from "vite-plugin-kaioken";
import mdx from "@mdx-js/rollup";
import shiki, { type RehypeShikiOptions } from "@shikijs/rehype";
import { transformerNotationHighlight } from "@shikijs/transformers";

const customTheme = {
  name: "rose-pine-moon",
  bg: "#2a2734",
  settings: [
    {
      scope: ["punctuation"],
      settings: {
        foreground: "#6c6783",
      },
    },
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: "#e09142",
      },
    },
    {
      scope: [
        "keyword.control.import.js",
        "keyword.control.from",
        "string",
        "storage.type",
      ],
      settings: {
        foreground: "#fc9",
      },
    },
    {
      scope: ["entity.name.tag", "variable"],
      settings: {
        foreground: "#c4b9fe",
      },
    },
  ],
};

export default defineConfig({
  resolve: {
    alias: {
      $: path.join(__dirname, "src"),
    },
  },
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        jsx: false,
        jsxImportSource: "kaioken",
        jsxRuntime: "automatic",
        rehypePlugins: [
          [
            shiki,
            {
              theme: "rose-pine-moon",
              transformers: [transformerNotationHighlight()],
            } as RehypeShikiOptions,
          ],
        ],
      }),
    },
    ssr({
      prerender: true,
    }),
    kaioken(),
  ],
});
