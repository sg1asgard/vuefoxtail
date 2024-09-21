// code style theme
import 'highlight.js/styles/atom-one-dark.min.css'

// import the core js
import hljs from 'highlight.js/lib/core'

// import highlight languages
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'

// declare languages
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)

// other options
hljs.highlightAll()
