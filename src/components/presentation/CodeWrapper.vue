<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  codeExample: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div>
    <span class="capitalize">{{ props.label }}</span>
    <highlightjs :code="props.codeExample" autodetect />
  </div>
</template>
