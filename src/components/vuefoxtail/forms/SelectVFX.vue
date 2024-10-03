<script setup>
import { ref } from 'vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Select v1
const selectV1_common_css = ref(
  `// add this once in your main.css

select:disabled {
  background-color: var(--vfox-c-text-disabled);
}`
)

const selectV1_default = ref(
  `<select class="w-full bg-white border-2 border-slate-300 rounded-md px-4 p-2.5 transition-all ease-in-out duration-150 active:shadow-lg">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`
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
        <div class="items-center px-6 py-4 space-y-2">
          <select
            class="w-full bg-white border-2 border-slate-300 rounded-md px-4 p-2.5 transition-all ease-in-out duration-150 active:shadow-lg"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="selectV1_default"
          :codeCSS="selectV1_common_css"
          :isHTML="true"
          :isCSS="true"
        />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
select:disabled {
  background-color: var(--vfox-c-text-disabled);
}
</style>
