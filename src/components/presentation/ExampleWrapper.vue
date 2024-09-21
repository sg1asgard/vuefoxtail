<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="border-[1px] rounded-xl">
    <slot name="code-items"></slot>
    <div class="flex flex-row px-6 py-4 border-t-[1px] border-b-[1px]">
      <div class="flex-1 uppercase">html</div>
    </div>
    <div class="flex flex-col space-y-6 p-6">
      <slot name="code-example"></slot>
    </div>
  </div>
</template>
