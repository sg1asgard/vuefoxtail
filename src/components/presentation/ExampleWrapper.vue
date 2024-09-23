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
      <div
        v-if="isHtml"
        @click="$emit('showHTML')"
        class="bg-indigo-100 px-4 py-1 rounded-md cursor-pointer"
      >
        HTML
      </div>
      <div
        v-if="isCss"
        @click="$emit('showCSS')"
        class="px-4 py-1 rounded-md hover:bg-indigo-100 cursor-pointer"
      >
        CSS
      </div>
      <div
        v-if="isJs"
        @click="$emit('showJS')"
        class="px-4 py-1 rounded-md hover:bg-indigo-100 cursor-pointer"
      >
        JavaScript
      </div>
    </div>
    <div class="flex flex-col space-y-6 p-6">
      <slot name="code-example"></slot>
    </div>
  </div>
</template>
