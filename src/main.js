import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// highlight.js
import 'highlight.js/styles/atom-one-dark.min.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('javascript', javascript, 'css', css, 'html')
hljs.highlightAll()

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(hljsVuePlugin)

app.mount('#app')
