import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import EbrainUI from 'ebrain-ui-vue'
import 'ebrain-ui-vue/dist/index.css'
import './main.css'
import './md.css'

export default {
  Layout: () => {
    return h(Layout, null, {
      
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(EbrainUI)
  }
} satisfies Theme