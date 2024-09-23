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
  <h3 class="text-xl px-6 pt-4">
    <span class="capitalize font-medium">{{ props.sectionTitle }}</span>
  </h3>
</template>
