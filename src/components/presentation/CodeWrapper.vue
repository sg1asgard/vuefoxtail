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
  <div>
    <highlightjs
      :language="props.lang"
      :code="props.codeExample"
      :autodetect="false"
      @click="copy(targetEl.code)"
      ref="targetEl"
    />
  </div>
</template>
