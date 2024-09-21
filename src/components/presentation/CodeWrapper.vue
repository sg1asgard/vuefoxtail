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
    <highlightjs autodetect :ignoreIllegals="false" :code="props.codeExample" />
  </div>
</template>
