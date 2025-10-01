import type { Theme } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // register your custom global components
  },
} satisfies Theme;
