import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ToaaM's Blog",
  description: "ToaaM's Blog",
  cleanUrls: true,
  srcDir: './pages',

  //vite
  vite: {
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true
    }
  },

  markdown: {
    toc: { level: [1, 2, 3, 4] }
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
