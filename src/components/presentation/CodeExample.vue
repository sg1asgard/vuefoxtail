<script setup>
import { ref, computed } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'

const props = defineProps({
  codeHTML: String,
  codeCSS: String,
  codeJS: String,
  isHTML: Boolean,
  isCSS: Boolean,
  isJS: Boolean
})

const activeTab = ref('HTML')

const allTabs = [
  { name: 'HTML', prop: 'isHTML', lang: 'xml', code: 'codeHTML' },
  { name: 'CSS', prop: 'isCSS', lang: 'css', code: 'codeCSS' },
  { name: 'JavaScript', prop: 'isJS', lang: 'javascript', code: 'codeJS' }
]

const visibleTabs = computed(() => allTabs.filter((tab) => props[tab.prop]))

const changeTab = (tabName) => {
  activeTab.value = tabName
}

const activeTabData = computed(() => visibleTabs.value.find((tab) => tab.name === activeTab.value))
</script>

<template>
  <div class="flex flex-col space-y-6">
    <div class="flex flex-row px-6 py-4 space-x-2 border-t-[1px] border-b-[1px]">
      <div
        v-for="tab in visibleTabs"
        :key="tab.name"
        @click="changeTab(tab.name)"
        :class="[
          activeTab === tab.name ? 'bg-indigo-100' : 'hover:bg-indigo-100',
          'px-4 py-1 rounded-md cursor-pointer'
        ]"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="flex flex-col space-y-6 px-6 pb-6">
      <CodeWrapper
        v-if="activeTabData"
        :lang="activeTabData.lang"
        :codeExample="props[activeTabData.code]"
      />
    </div>
  </div>
</template>
