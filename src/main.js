import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { i18n } from '@/i18n'

const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).use(i18n)
app.mount('#app')
