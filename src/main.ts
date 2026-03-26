import './assets/main.css'
import './assets/md.css'
import 'ebrain-ui/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import fade from './directives/fade'
import bounce from './directives/bounce'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('fade', fade)
app.directive('bounce', bounce)

app.mount('#app')

// import './assets/main.css'
// import './assets/md.css'
// import 'ebrain-ui/dist/index.css'

// import { ViteSSG } from 'vite-ssg'
// import { createPinia } from 'pinia'
// //import { createUnhead } from '@unhead/vue' // 刚才安装的 SEO 工具

// import App from './App.vue'
// import { routes } from './router' // 注意：这里要改成导出 routes 数组，见下方说明
// import fade from './directives/fade'
// import bounce from './directives/bounce'

// // 使用 ViteSSG 替代传统的 createApp
// export const createApp = ViteSSG(
//   App,
//   { routes }, // 传入路由数组
//   ({ app, router, routes, isClient, initialState }) => {
//     // 1. 初始化 Pinia
//     const pinia = createPinia()
//     app.use(pinia)

//     // 2. 初始化 Head (用于处理每篇文章的 SEO 标题)
//     //const head = createUnhead()
//     //app.use(head)

//     // 3. 注册你的自定义指令
//     app.directive('fade', fade)
//     app.directive('bounce', bounce)

//     // 如果你有特殊的逻辑只想在浏览器运行，不想在打包时运行，可以这样写：
//     if (isClient) {
//       // 比如只有客户端才需要的初始化
//     }
//   }
// )