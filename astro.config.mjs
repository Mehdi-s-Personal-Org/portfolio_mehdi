import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  prefetch: true,

  markdown: {
    shikiConfig: {
      theme: "slack-dark",
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});