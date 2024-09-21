<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
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

const targetEl = ref('')
const { copy } = useClipboard({ targetEl })
</script>

<template>
  <div class="relative group">
    <span
      class="absolute z-10 top-3 right-3 cursor-pointer hidden group-hover:flex items-center p-1.5 rounded-lg bg-slate-200"
      ><span class="icon-[ph--clipboard] text-2xl text-slate-800"></span>
    </span>
    <highlightjs
      :language="props.lang"
      :code="props.codeExample"
      :autodetect="false"
      @click="copy(targetEl.code)"
      ref="targetEl"
    />
  </div>
</template>
