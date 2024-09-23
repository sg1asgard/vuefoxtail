<script setup>
import { ref } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'

// Props
const props = defineProps({
  codeHTML: {
    type: String,
    required: false
  },
  codeCSS: {
    type: String,
    required: false
  },
  codeJS: {
    type: String,
    required: false
  },
  isHTML: {
    type: Boolean,
    required: false
  },
  isCSS: {
    type: Boolean,
    required: false
  },
  isJS: {
    type: Boolean,
    required: false
  }
})

// Show, hide html, css, js code boxes
const html = ref(true)
const css = ref(false)
const js = ref(false)

const changeTab = (tab) => {
  if (tab === 'tabHTML') {
    ;(html.value = true), (css.value = false), (js.value = false)
  }
  if (tab === 'tabCSS') {
    ;(html.value = false), (css.value = true), (js.value = false)
  }
  if (tab === 'tabJS') {
    ;(html.value = false), (css.value = false), (js.value = true)
  }
}
</script>

<template>
  <div class="flex flex-col space-y-6">
    <div class="flex flex-row px-6 py-4 space-x-2 border-t-[1px] border-b-[1px]">
      <div
        v-if="props?.isHTML"
        @click="changeTab('tabHTML')"
        :class="`${html ? 'bg-indigo-100' : 'hover:bg-indigo-100'} px-4 py-1 rounded-md cursor-pointer`"
      >
        HTML
      </div>
      <div
        v-if="props?.isCSS"
        @click="changeTab('tabCSS')"
        :class="`${css ? 'bg-indigo-100' : 'hover:bg-indigo-100'} px-4 py-1 rounded-md cursor-pointer`"
      >
        CSS
      </div>
      <div
        v-if="props?.isJS"
        @click="changeTab('tabJS')"
        :class="`${js ? 'bg-indigo-100' : 'hover:bg-indigo-100'} px-4 py-1 rounded-md cursor-pointer`"
      >
        JavaScript
      </div>
    </div>
    <div class="flex flex-col space-y-6 px-6 pb-6">
      <CodeWrapper v-if="html" lang="xml" :codeExample="props?.codeHTML" />
      <CodeWrapper v-if="css" lang="css" :codeExample="props?.codeCSS" />
      <CodeWrapper v-if="js" lang="javascript" :codeExample="props?.codeJS" />
    </div>
  </div>
</template>
