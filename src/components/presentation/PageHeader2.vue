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
  <h2 class="text-2xl mb-4">
    <span class="capitalize font-medium">{{ props.sectionTitle }}</span>
    <span class="text-slate-500 ps-2 font-medium">({{ props.designVersion }})</span>
  </h2>
</template>
