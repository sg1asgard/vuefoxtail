<script setup>
import { ref } from 'vue'

const code = ref(`
<div class="code border-2 border-indigo-300 p-4 bg-indigo-200 rounded-md">
  Alert
</div>`)
</script>

<template>
  <highlightjs autodetect :code="code" />

  <div class="border-2 border-indigo-300 p-4 bg-indigo-200 rounded-md">Alert</div>

  <div class="border-2 border-teal-300 p-4 bg-teal-200 rounded-md">Alert</div>

  <div class="border-2 border-red-200 p-4 bg-red-100 rounded-md">Alert</div>

  <div class="border-2 border-orange-200 p-4 bg-orange-100 rounded-md">Alert</div>

  <div class="border-2 border-sky-200 p-4 bg-sky-100 rounded-md">Alert</div>
</template>

<style lang="css" scoped>
.hljscode {
  code.hljs {
    padding: 24px !important;
    border-radius: 42px !important;
  }
}
</style>
