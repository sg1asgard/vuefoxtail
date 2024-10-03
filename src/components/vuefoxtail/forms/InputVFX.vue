<script setup>
import { ref } from 'vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Select v1
const inputV1_common_css = ref(
  `// add this once in your main.css

input[type="text"]:disabled,
input[type="password"]:disabled {
  background-color: var(--vfox-c-text-disabled);
}`
)

const inputV1_default = ref(
  `<div class="w-full flex-1">
  <label for="inputDefault" class="mb-2 flex">Label</label>
  <input id="inputDefault" class="w-full bg-white border-2 border-slate-300 rounded-md px-3.5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg" type="text" placeholder="default"/>
</div>

<div class="w-full flex-1">
  <label for="inputDefaultDisabled" class="mb-2 flex">Label</label>
  <input id="inputDefaultDisabled" class="w-full bg-white border-2 border-slate-300 rounded-md px-3.5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg" type="text" placeholder="disabled" disabled />
</div>

<div class="w-full flex-1"> 
  <label for="inputDefaultRounded" class="mb-2 flex">Label</label>
  <input id="inputDefaultRounded" class="w-full bg-white border-2 border-slate-300 rounded-full px-5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg" type="text" placeholder="default" />
</div>

<div class="w-full flex-1">
  <label for="inputDefaultRoundedDisabled" class="mb-2 flex">Label</label>
  <input id="inputDefaultRoundedDisabled" class="w-full bg-white border-2 border-slate-300 rounded-full px-5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg" type="text" placeholder="disabled" disabled />
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
        <div class="flex flex-col space-y-6 items-center px-6 py-4">
          <div class="w-full flex-1">
            <label for="inputDefault" class="mb-2 flex">Label</label>
            <input
              id="inputDefault"
              class="w-full bg-white border-2 border-slate-300 rounded-md px-3.5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg"
              type="text"
              placeholder="default"
            />
          </div>
          <div class="w-full flex-1">
            <label for="inputDefaultDisabled" class="mb-2 flex">Label</label>
            <input
              id="inputDefaultDisabled"
              class="w-full bg-white border-2 border-slate-300 rounded-md px-3.5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg"
              type="text"
              placeholder="disabled"
              disabled
            />
          </div>
          <div class="w-full flex-1">
            <label for="inputDefaultRounded" class="mb-2 flex">Label</label>
            <input
              id="inputDefaultRounded"
              class="w-full bg-white border-2 border-slate-300 rounded-full px-5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg"
              type="text"
              placeholder="default"
            />
          </div>
          <div class="w-full flex-1">
            <label for="inputDefaultRoundedDisabled" class="mb-2 flex">Label</label>
            <input
              id="inputDefaultRoundedDisabled"
              class="w-full bg-white border-2 border-slate-300 rounded-full px-5 py-2.5 transition-all ease-in-out duration-150 focus:shadow-lg"
              type="text"
              placeholder="disabled"
              disabled
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
input[type='text']:disabled {
  background-color: var(--color-background-disabled-200);
}
</style>
