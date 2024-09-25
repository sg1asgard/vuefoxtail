<script setup>
import { ref } from 'vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Select v1
const inputV1_common_css = ref(
  `// add this once in your main.css

input[type="text"]:disabled {
  background-color: var(--vfox-c-text-disabled);
}`
)

const inputV1_small = ref(
  `<input class="w-full bg-white border-2 border-slate-300 rounded-md px-3 py-2 text-sm transition-all ease-in-out duration-150 active:shadow-lg" type="text" placeholder="input" />`
)

const inputV1_default = ref(
  `<input class="w-full bg-white border-2 border-slate-300 rounded-md px-3.5 py-2.5 transition-all ease-in-out duration-150 active:shadow-lg" type="text" placeholder="input" />`
)

const inputV1_large = ref(
  `<input class="w-full bg-white border-2 border-slate-300 rounded-md text-xl px-4 py-3 transition-all ease-in-out duration-150 active:shadow-lg" type="text" placeholder="input" />`
)
</script>

<template>
  <section>
    <div class="mb-12">
      <p>
        By default, the buttons have three sizes as Small, Medium, Large and one with icon. You can
        add the icon to the rest of the sizes as show in the examples.
      </p>

      <div class="mt-4">
        <AlertWrapper variant="info">
          <strong>Select</strong> form element require
          <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank"
            >@tailwindcss/forms plugin</a
          >.
        </AlertWrapper>
      </div>
    </div>
    <!-- Small -->
    <PageHeader3 sectionTitle="Small" />
    <ExampleWrapper isHtml isCss isJs>
      <template v-slot:code-items>
        <div
          class="flex w-100 flex-col md:flex-row items-center px-6 py-4 md:space-x-6 space-y-2 md:space-y-0"
        >
          <div class="w-full flex-1">
            <input
              class="w-full bg-white border-2 border-slate-300 rounded-md px-3 py-2 text-sm transition-all ease-in-out duration-150 active:shadow-lg"
              type="text"
              placeholder="input"
            />
          </div>
          <div class="w-full flex-1">
            <input
              class="w-full bg-white border-2 border-slate-300 rounded-md px-3 py-2 text-sm transition-all ease-in-out duration-150 active:shadow-lg"
              type="text"
              placeholder="input"
            />
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="inputV1_small"
          :codeCSS="inputV1_common_css"
          :isHTML="true"
          :isCSS="true"
        />
      </template>
    </ExampleWrapper>

    <!-- Default -->
    <PageHeader3 sectionTitle="Default" class="mt-8" />
    <ExampleWrapper isHtml isCss isJs>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <input
            class="w-full bg-white border-2 border-slate-300 rounded-md px-3.5 py-2.5 transition-all ease-in-out duration-150 active:shadow-lg"
            type="text"
            placeholder="input"
          />
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

    <!-- Large -->
    <PageHeader3 sectionTitle="Large" class="mt-8" />
    <ExampleWrapper isHtml isCss isJs>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <input
            class="w-full bg-white border-2 border-slate-300 rounded-md text-xl px-4 py-3 transition-all ease-in-out duration-150 active:shadow-lg"
            type="text"
            placeholder="input"
          />
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="inputV1_large"
          :codeCSS="inputV1_common_css"
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
