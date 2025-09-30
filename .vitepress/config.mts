import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'de-DE',
  title: 'Chris Portfolio',
  description: 'Mein persönliches Portfolio und Blog über Softwareentwicklung & Game Dev',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.svg' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projekte', link: '/projects/' },
      { text: 'Über mich', link: '/about' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chris-GW' },
      { icon: 'itchdotio', link: 'https://chris-gw.itch.io' },
      { icon: 'twitch', link: 'https://www.twitch.tv/chrisgw' },
      { icon: 'youtube', link: 'https://www.youtube.com/@chrisgw936' }
    ],

    footer: {
      message: undefined,
      copyright: 'Copyright © 2025-present Chris'
    }
  }
})
