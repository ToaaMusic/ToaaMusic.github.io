import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ToaaM 的个人博客",
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

})
