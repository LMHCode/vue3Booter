import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from '@/router/index'
import pinia from '@/pinia'

createApp(App).use(router).use(pinia).mount('#app')
