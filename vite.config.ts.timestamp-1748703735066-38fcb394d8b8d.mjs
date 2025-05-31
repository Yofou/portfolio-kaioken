// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.12/node_modules/vite/dist/node/index.js";
import ssr from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/vike@0.4.181_vite@5.3.4_@types+node@20.14.12_/node_modules/vike/dist/esm/node/plugin/index.js";
import kaioken from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/vite-plugin-kaioken@0.10.3_kaioken@0.28.1/node_modules/vite-plugin-kaioken/dist/index.js";
import mdx from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/@mdx-js+rollup@3.0.1_rollup@4.19.0/node_modules/@mdx-js/rollup/index.js";
import shiki from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/@shikijs+rehype@1.11.1/node_modules/@shikijs/rehype/dist/index.mjs";
import { transformerNotationHighlight } from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/@shikijs+transformers@1.11.1/node_modules/@shikijs/transformers/dist/index.mjs";
import { ViteImageOptimizer } from "file:///Users/nathanewen/github/portfolio-kaioken/node_modules/.pnpm/vite-plugin-image-optimizer@1.1.8_vite@5.3.4_@types+node@20.14.12_/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/nathanewen/github/portfolio-kaioken";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      $: path.join(__vite_injected_original_dirname, "src")
    }
  },
  esbuild: {
    sourcemap: false
  },
  plugins: [
    ViteImageOptimizer(),
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
              transformers: [transformerNotationHighlight()]
            }
          ]
        ]
      })
    },
    ssr({
      prerender: true
    }),
    kaioken()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmF0aGFuZXdlbi9naXRodWIvcG9ydGZvbGlvLWthaW9rZW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9uYXRoYW5ld2VuL2dpdGh1Yi9wb3J0Zm9saW8ta2Fpb2tlbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmF0aGFuZXdlbi9naXRodWIvcG9ydGZvbGlvLWthaW9rZW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHNzciBmcm9tIFwidmlrZS9wbHVnaW5cIjtcbmltcG9ydCBrYWlva2VuIGZyb20gXCJ2aXRlLXBsdWdpbi1rYWlva2VuXCI7XG5pbXBvcnQgbWR4IGZyb20gXCJAbWR4LWpzL3JvbGx1cFwiO1xuaW1wb3J0IHNoaWtpLCB7IHR5cGUgUmVoeXBlU2hpa2lPcHRpb25zIH0gZnJvbSBcIkBzaGlraWpzL3JlaHlwZVwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtZXJOb3RhdGlvbkhpZ2hsaWdodCB9IGZyb20gXCJAc2hpa2lqcy90cmFuc2Zvcm1lcnNcIjtcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XG5cbmNvbnN0IGN1c3RvbVRoZW1lID0ge1xuICBuYW1lOiBcInJvc2UtcGluZS1tb29uXCIsXG4gIGJnOiBcIiMyYTI3MzRcIixcbiAgc2V0dGluZ3M6IFtcbiAgICB7XG4gICAgICBzY29wZTogW1wicHVuY3R1YXRpb25cIl0sXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBmb3JlZ3JvdW5kOiBcIiM2YzY3ODNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY29wZTogW1xuICAgICAgICBcInB1bmN0dWF0aW9uLmRlZmluaXRpb24udGFnXCJcbiAgICAgIF0sXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBmb3JlZ3JvdW5kOiBcIiNlMDkxNDJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBzY29wZTogW1xuICAgICAgICBcImtleXdvcmQuY29udHJvbC5pbXBvcnQuanNcIixcbiAgICAgICAgXCJrZXl3b3JkLmNvbnRyb2wuZnJvbVwiLFxuICAgICAgICBcInN0cmluZ1wiLFxuICAgICAgICBcInN0b3JhZ2UudHlwZVwiLFxuICAgICAgXSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGZvcmVncm91bmQ6IFwiI2ZjOVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjb3BlOiBbXCJlbnRpdHkubmFtZS50YWdcIiwgXCJ2YXJpYWJsZVwiXSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGZvcmVncm91bmQ6IFwiI2M0YjlmZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAkOiBwYXRoLmpvaW4oX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9LFxuICB9LFxuICBlc2J1aWxkOiB7XG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZpdGVJbWFnZU9wdGltaXplcigpLFxuICAgIHtcbiAgICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgICAuLi5tZHgoe1xuICAgICAgICBqc3g6IGZhbHNlLFxuICAgICAgICBqc3hJbXBvcnRTb3VyY2U6IFwia2Fpb2tlblwiLFxuICAgICAgICBqc3hSdW50aW1lOiBcImF1dG9tYXRpY1wiLFxuICAgICAgICByZWh5cGVQbHVnaW5zOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgc2hpa2ksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoZW1lOiBcInJvc2UtcGluZS1tb29uXCIsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybWVyczogW3RyYW5zZm9ybWVyTm90YXRpb25IaWdobGlnaHQoKV0sXG4gICAgICAgICAgICB9IGFzIFJlaHlwZVNoaWtpT3B0aW9ucyxcbiAgICAgICAgICBdLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgfSxcbiAgICBzc3Ioe1xuICAgICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgIH0pLFxuICAgIGthaW9rZW4oKSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxPQUFPLFVBQVU7QUFDalUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUF3QztBQUMvQyxTQUFTLG9DQUFvQztBQUM3QyxTQUFTLDBCQUEwQjtBQVBuQyxJQUFNLG1DQUFtQztBQStDekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsR0FBRyxLQUFLLEtBQUssa0NBQVcsS0FBSztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLG1CQUFtQjtBQUFBLElBQ25CO0FBQUEsTUFDRSxTQUFTO0FBQUEsTUFDVCxHQUFHLElBQUk7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLGlCQUFpQjtBQUFBLFFBQ2pCLFlBQVk7QUFBQSxRQUNaLGVBQWU7QUFBQSxVQUNiO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxjQUNFLE9BQU87QUFBQSxjQUNQLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQztBQUFBLFlBQy9DO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
