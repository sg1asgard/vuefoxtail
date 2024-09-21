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
const { text, copy, copied, isSupported } = useClipboard({ targetEl })
</script>

<template>
  <div class="relative">
    <span class="absolute z-10 top-3 right-3 flex items-center p-2 rounded-xl bg-slate-900"
      ><span class="icon-[ph--clipboard-light] text-2xl text-white"></span>
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
