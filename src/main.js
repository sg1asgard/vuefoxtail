import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// highlight.js
import './utils/highlight'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.mount('#app')
