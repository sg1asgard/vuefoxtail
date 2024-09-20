<script setup>
const props = defineProps({
  sectionTitle: {
    type: String,
    required: true
  },
  designVersion: {
    type: String,
    required: true
  }
})
</script>
<template>
  <h2 class="capitalize font-medium text-2xl">
    {{ props.sectionTitle }} <span class="text-slate-700">({{ props.designVersion }})</span>
  </h2>
</template>
