<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  codeExample: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  }
})

// Copy Text
const targetEl = ref('')
const { copy } = useClipboard({ targetEl })

// Show, hide the icons and confirmation text
const statusCopy = ref(false)
let timeoutId = null

const copyText = () => {
  statusCopy.value = true

  // Clear any existing timeout
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  // Set a new timeout
  timeoutId = setTimeout(() => {
    statusCopy.value = false
  }, 3000)
}
</script>

<template>
  <div class="relative group" @click="copy(targetEl.code)">
    <div class="absolute z-10 top-3 right-3 rounded-lg">
      <div
        v-show="statusCopy"
        class="cursor-pointer px-3 py-1.5 bg-slate-800 border-[1px] border-slate-600 rounded-lg text-white inline-flex flex-row items-center"
      >
        <span class="me-2">Code copied!</span>
        <span class="icon-[ph--check-fat] text-2xl text-green-500"></span>
      </div>

      <div
        v-show="!statusCopy"
        @click="copyText"
        class="cursor-pointer hidden group-hover:inline-flex items-center p-1.5 rounded-lg border-[1px] border-slate-600 hover:border-indigo-600 bg-slate-950 hover:bg-indigo-600"
      >
        <span class="icon-[ph--clipboard] text-2xl text-white"></span>
      </div>
    </div>
    <highlightjs
      :language="props.lang"
      :code="props.codeExample"
      :autodetect="false"
      ref="targetEl"
    />
  </div>
</template>
