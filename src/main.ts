import './assets/main.css'
import './assets/md.css'
import 'ebrainvue/dist/index.css'
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
