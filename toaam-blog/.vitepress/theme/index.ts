import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import UILib from 'ui'
import 'ui/dist/index.css'
import './main.css'
import './md.css'

export default {
  Layout: () => {
    return h(Layout, null, {
      
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(UILib)
  }
} satisfies Theme