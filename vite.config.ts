import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import vueDevTools from 'vite-plugin-vue-devtools'

import Markdown from 'unplugin-vue-markdown/vite'
// npm i -D unplugin-vue-markdown @vitejs/plugin-vue markdown-it

// https://vite.dev/config/
export default defineConfig({
  base:'/',
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueDevTools(),
    Markdown({
      // 可选：给渲染出来的根节点加 class，方便全局 Markdown 样式
      wrapperClasses: 'md',
      // markdownItSetup(md) { … } // 想拓展语法时可以在这里做
      markdownItSetup(md) {
        // md.use(require('highlightjs'))
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'ebrain-ui': path.resolve(__dirname, '../ebrain-ui-vue/')
    },
  },
  optimizeDeps: {
    exclude: ['ebrain-ui']
  }
})
