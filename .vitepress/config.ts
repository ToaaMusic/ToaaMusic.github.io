import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ToaaM's Blog",
  description: "ToaaM's Blog",
  cleanUrls: true,
  srcDir: './pages',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  //vite
  vite: {
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true
    }
  },

  markdown: {
    theme: 'material-theme-palenight',
    languageAlias: {
      'cs': 'csharp',
     },
    defaultHighlightLang: 'bash',
    codeCopyButtonTitle: '复制代码',
    toc: {
      level: [1, 2, 3, 4],
      slugify: (s) => s,
      format: (title) => title
    },
    headers: {
      level: [1, 2, 3, 4, 5, 6],
      slugify: (s) => s.toLowerCase()
    },
  },

  // //theme
  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Posts', link: '/posts/hello' }
  //   ],

  //   sidebar: [
  //     {
  //       text: 'Posts',
  //       items: [
  //         { text: 'Hello', link: '/posts/hello' },
  //         { text: 'toaam', link: '/posts/toaam' },
  //         { text: 'log', link: '/posts/log' },
  //         { text: 'newtoarch', link: '/posts/newtoarch' },
  //         { text: 'csharp-pre', link: '/posts/csharp-pre' },
  //         { text: 'delegate', link: '/posts/delegate' },
  //         { text: 'learn3d-before', link: '/posts/learn3d-before'},
  //         { text: 'gltf', link: '/posts/gltf'}
  //       ]
  //     }
  //   ],

  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  //   ]
  // }
})
