import { defineConfig } from "vite-plus";
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: "src/frontend",
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: [
    svelte({
      // plugin options
    })
  ],
});
