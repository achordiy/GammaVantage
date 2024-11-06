import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Marquee from 'vue3-marquee'
import autosizePlugin from 'v-autosize/src/plugin.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)
app.use(autosizePlugin)
app.mount('#app')
