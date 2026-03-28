// // https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import type { Theme } from 'vitepress'
// import DefaultTheme from 'vitepress/theme'
// import './style.css'

// export default {
//   extends: DefaultTheme,
//   Layout: () => {
//     return h(DefaultTheme.Layout, null, {
//       // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     })
//   },
//   enhanceApp({ app, router, siteData }) {
//     // ...
//   }
// } satisfies Theme


import type { Theme } from 'vitepress'
import { h } from 'vue'
import Layout from './Layout.vue'
import './main.css'
import './md.css'
import 'ebrain-ui-vue/dist/index.css'

export default {
  Layout: () => {
    return h(Layout, null, {
      
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里做一些全局的事情，比如注册组件
  }
} satisfies Theme