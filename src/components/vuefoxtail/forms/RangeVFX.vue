<script setup>
import { ref } from 'vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Select v1
const inputV1_common_css = ref(
  `// add this once in your main.css

input[type="range"]:disabled {
  background-color: var(--vfox-c-text-disabled);
}`
)

const inputV1_default = ref(
  `<div class="w-full flex-1">
  <label for="customRange1">Example range</label>
  <input id="customRange1" class="w-full bg-white border-2 border-slate-300 rounded-md" type="range" min="0" max="10" value="5" />
</div>`
)
</script>

<template>
  <section>
    <div class="mb-12">
      <AlertWrapper variant="info">
        <strong>Select</strong> form element require
        <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank"
          >@tailwindcss/forms plugin</a
        >.
      </AlertWrapper>
    </div>

    <!-- Default -->
    <ExampleWrapper isHtml isCss isJs>
      <template v-slot:code-items>
        <div class="flex flex-col space-y-3 items-center px-6 py-4">
          <div class="w-full flex-1">
            <label for="customRange1">Example range</label>
            <input
              id="customRange1"
              class="w-full bg-white border-2 border-slate-300 rounded-md"
              type="range"
              min="0"
              max="10"
              value="5"
            />
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="inputV1_default"
          :codeCSS="inputV1_common_css"
          :isHTML="true"
          :isCSS="true"
        />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
input[type='range']:disabled {
  background-color: var(--color-background-disabled-200);
}
</style>
