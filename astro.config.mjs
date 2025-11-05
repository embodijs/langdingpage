import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import viteEmbodiCms from "@embodi/vite-astro-cms";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://embodi.site",
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss(), viteEmbodiCms()],
  },
});
