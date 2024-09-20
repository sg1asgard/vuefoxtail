<script setup>
import { ref } from 'vue'

const code = ref(`<div class="code border-2 border-indigo-300 p-4 bg-indigo-200 rounded-md">
  Alert
</div>`)
</script>

<template>
  <highlightjs autodetect :code="code" />

  <div class="border-2 border-indigo-300 p-4 bg-indigo-200 rounded-md">Alert</div>
</template>
<style lang="css" scoped></style>
