<script setup>
const props = defineProps({
  sectionTitle: {
    type: String,
    required: true
  }
})
</script>
<template>
  <h3 class="text-xl mb-2">
    <span class="capitalize font-medium">{{ props.sectionTitle }}</span>
  </h3>
</template>
