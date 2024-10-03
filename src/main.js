import './assets/main.css'
import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

// highlight.js
import './utils/highlight'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import App from './App.vue'
import router from './router'

// create app
const app = createApp(App)

// declare global variables
app.config.globalProperties.appName = 'FoxTail'
app.config.globalProperties.license = reactive({
  url: 'https://opensource.org/licenses/MIT',
  name: 'MIT'
})
app.config.globalProperties.telegram = reactive({
  url: 'https://t.me/+TV7u5zm00IVmY2Rk',
  name: 'Telegram'
})
app.config.globalProperties.discord = reactive({
  url: 'https://discord.gg/aXmpsa7h',
  name: 'Discord'
})

// app.use
app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.mount('#app')
