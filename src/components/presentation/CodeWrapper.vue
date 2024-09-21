<script setup>
const props = defineProps({
  codeExample: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div>
    <highlightjs v-clip :language="props.lang" :code="props.codeExample" :autodetect="false" />
  </div>
</template>
