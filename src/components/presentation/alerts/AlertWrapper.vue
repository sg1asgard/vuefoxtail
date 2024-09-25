<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator: (value) => ['info', 'warning', 'danger'].includes(value),
    required: true
  }
})

const alertClasses = computed(() => {
  const classes = {
    info: 'border-sky-300 bg-sky-100',
    warning: 'border-amber-300 bg-amber-100',
    danger: 'border-rose-300 bg-rose-100'
  }
  return classes[props.variant] || ''
})
</script>

<template>
  <p :class="`persentation-alert p-4 border-s-4 ${alertClasses}`">
    <slot></slot>
  </p>
</template>

<style lang="css">
.persentation-alert {
  strong {
    @apply text-slate-700/90 !important;
  }
}
</style>
