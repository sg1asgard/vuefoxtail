<script setup>
const props = defineProps({
  sectionTitle: {
    type: String || Object,
    required: true
  }
})
</script>
<template>
  <h2 class="text-2xl mb-4">
    <span class="capitalize font-medium">{{ props.sectionTitle }}</span>
  </h2>
</template>
