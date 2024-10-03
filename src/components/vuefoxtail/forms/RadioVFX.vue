<script setup>
import { ref } from 'vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Checkbox v1
const radioV1_common_css = ref(
  `// add this once in your main.css

input[type='radio']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
`
)

const radioV1_default = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultDefault" id="radioDefaultDefault_1" />
  <label class="text-md" for="radioDefaultDefault_1">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultDefault" id="radioSelectedDefault_1" checked />
  <label class="text-md" for="radioSelectedDefault_1">Selected</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultDefault_2" id="radioDefaultDisabledDefault_1" disabled />
  <label class="text-md text-slate-600" for="radioDefaultDisabledDefault_1">Default Disabled</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultDefault_2" id="radioSelectedDisabledDefault_2" checked disabled />
  <label class="text-md text-slate-600" for="radioSelectedDisabledDefault_2">Checked Disabled</label>
</div>
`
)
</script>

<template>
  <section>
    <div class="mb-12">
      <AlertWrapper variant="info">
        <strong>Checkbox</strong> form element require
        <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank"
          >@tailwindcss/forms plugin</a
        >.
      </AlertWrapper>
    </div>

    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="p-2"
                type="radio"
                value=""
                name="radioDefaultDefault"
                id="radioDefaultDefault_1"
              />
              <label class="text-md" for="radioDefaultDefault_1">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="p-2"
                type="radio"
                value=""
                name="radioDefaultDefault"
                id="radioSelectedDefault_1"
                checked
              />
              <label class="text-md" for="radioSelectedDefault_1">Selected</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="p-2"
                type="radio"
                value=""
                name="radioDefaultDefault_2"
                id="radioDefaultDisabledDefault_1"
                disabled
              />
              <label class="text-md text-slate-600" for="radioDefaultDisabledDefault_1"
                >Default Disabled</label
              >
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="p-2"
                type="radio"
                value=""
                name="radioDefaultDefault_2"
                id="radioSelectedDisabledDefault_2"
                checked
                disabled
              />
              <label class="text-md text-slate-600" for="radioSelectedDisabledDefault_2"
                >Checked Disabled</label
              >
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="radioV1_default"
          :isHTML="true"
          :codeCSS="radioV1_common_css"
          :isCSS="true"
        />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
input[type='radio']:disabled {
  background-color: var(--color-background-disabled-300);
}
</style>
