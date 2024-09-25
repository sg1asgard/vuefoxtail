<script setup>
import { reactive } from 'vue'

const props = defineProps({
  info: Boolean,
  warning: Boolean,
  danger: Boolean
})

const alert = reactive({
  info: 'border-sky-300 bg-sky-100'
})
</script>
<template>
  <p
    :class="`p-4 border-s-4 ${props.info ? alert.info : ''} ${props.warning ? alert.warning : ''} ${props.danger ? alert.danger : ''}`"
  >
    <slot></slot>
  </p>
</template>
