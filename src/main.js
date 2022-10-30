import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import '@/assets/font/iconfont.css'
import App from './App.vue'
import router from './router'
import { i18n } from '@/i18n'
import './router/permission'

const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).use(i18n)
app.mount('#app')
