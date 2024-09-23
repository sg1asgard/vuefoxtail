<script setup>
import { ref } from 'vue'
const props = defineProps({
  isHtml: {
    type: Boolean,
    required: false
  },
  isCss: {
    type: Boolean,
    required: false
  },
  isJs: {
    type: Boolean,
    required: false
  }
})
</script>
<template>
  <div class="border-[1px] rounded-xl">
    <slot name="code-items"></slot>
    <div
      v-if="isHtml || isCss || isJs"
      class="flex flex-row px-6 py-4 space-x-2 border-t-[1px] border-b-[1px]"
    >
      <div v-if="isHtml" class="bg-indigo-100 px-4 py-1 rounded-md">HTML</div>
      <div v-if="isCss" class="px-4 py-1 rounded-md">CSS</div>
      <div v-if="isJs">JavaScript</div>
    </div>
    <div class="flex flex-col space-y-6 p-6">
      <slot name="code-example"></slot>
    </div>
  </div>
</template>
