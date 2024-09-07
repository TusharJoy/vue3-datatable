import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js", // Ensures PostCSS processes your Tailwind CSS
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.js"), // Entry point for the library
      name: "Vue3DataTable",
      fileName: (format) => `vue3-datatable.${format}.js`, // Output file names
      formats: ["es", "umd"], // ES modules and UMD
    },
    rollupOptions: {
      external: ["vue"], // Externalize Vue, so it’s not bundled
      output: {
        globals: {
          vue: "Vue", // For UMD builds, use the global "Vue"
        },
      },
    },
  },
  plugins: [vue()],
});
