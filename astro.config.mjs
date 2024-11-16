// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // 'server or 'hybrid'
  output: "hybrid",

  prefetch: true,

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],

  adapter: node({
    mode: "standalone",
  }),
});