<script setup>
const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  }
})
</script>
<template>
  <h1 class="text-3xl font-bold capitalize mb-8">{{ props.pageTitle }}</h1>
</template>
