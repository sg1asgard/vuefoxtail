<script setup>
import { ref } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'

// Props
const props = defineProps({
  codeHTML: {
    type: String
  },
  codeCSS: {
    type: String
  },
  codeJS: {
    type: String
  },
  isHTML: {
    type: Boolean
  },
  isCSS: {
    type: Boolean
  },
  isJS: {
    type: Boolean
  }
})

// Show, hide html, css, js code boxes
const html = ref(true)
const css = ref(false)
const js = ref(false)
</script>

<template>
  <CodeWrapper v-if="html" lang="xml" :codeExample="props.codeHTML" />
  <CodeWrapper v-if="css" lang="css" :codeExample="props.codeCSS" />
  <CodeWrapper v-if="js" lang="javascript" :codeExample="props.codeJS" />
</template>
