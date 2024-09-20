<script setup>
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

const highlightedCode = hljs.highlight('<span>Hello World!</span>', { language: 'xml' }).value
</script>

<template>
  {{ highlightedCode }}

  <div class="border-2 border-indigo-300 p-4 bg-indigo-200 rounded-md">Alert</div>

  <div class="border-2 border-teal-300 p-4 bg-teal-200 rounded-md">Alert</div>

  <div class="border-2 border-red-200 p-4 bg-red-100 rounded-md">Alert</div>

  <div class="border-2 border-orange-200 p-4 bg-orange-100 rounded-md">Alert</div>

  <div class="border-2 border-sky-200 p-4 bg-sky-100 rounded-md">Alert</div>
</template>

<style lang="css" scoped>
pre {
  display: block;
  font-family: monospace;
  unicode-bidi: isolate;
  white-space: pre;
  margin: 1em 0px;
}

code,
kbd,
pre,
samp {
  font-family:
    Fira Code VF,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    Liberation Mono,
    Courier New,
    monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}
</style>
