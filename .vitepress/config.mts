import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chris Portfolio",
  description:
    "My personal portfolio and blog about software development & game dev",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: "https://ckramer.ddns.net",
  },

  locales: {
    root: {
      label: "English (EN)",
      lang: "en-US",
    },
    de: {
      label: "German (DE)",
      lang: "de-DE",
      title: "Chris Portfolio",
      description:
        "Mein persönliches Portfolio und Blog über Softwareentwicklung & Game Dev",
      themeConfig: {
        nav: [
          { text: "Home", link: "/de/" },
          { text: "Blog", link: "/de/blog/" },
          { text: "Projekte", link: "/de/projects/" },
          { text: "Über mich", link: "/de/about" },
        ],
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon-96x96.png",
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Projects", link: "/projects/" },
      { text: "About me", link: "/about" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Chris-GW" },
      { icon: "itchdotio", link: "https://chris-gw.itch.io" },
      { icon: "twitch", link: "https://www.twitch.tv/chrisgw" },
      { icon: "youtube", link: "https://www.youtube.com/@chrisgw936" },
    ],

    footer: {
      message: undefined,
      copyright: "Copyright © 2025-present Chris",
    },
  },
});
