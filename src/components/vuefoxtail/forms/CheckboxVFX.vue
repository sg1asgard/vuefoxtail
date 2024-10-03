<script setup>
import { ref } from 'vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Checkbox v1
const checkboxV1_common_css = ref(
  `// add this once in your main.css

input[type='checkbox']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
`
)

const checkboxV1_default = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkDefaultDefault" />
  <label class="text-md" for="checkDefaultDefaultv">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkCheckedDefault" checked />
  <label class="text-md" for="checkCheckedDefault">Checked</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkDefaultDisabledDefault" disabled />
  <label class="text-md text-slate-600" for="checkDefaultDisabledDefault">Default Disabled</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkCheckedDisabledDefault" checked disabled />
  <label class="text-md text-slate-600" for="checkCheckedDisabledDefault">Default Disabled</label>
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

    <!-- Default -->
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkDefaultDefault" />
              <label class="text-md" for="checkDefaultDefault">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2"
                type="checkbox"
                value=""
                id="checkCheckedDefault"
                checked
              />
              <label class="text-md" for="checkCheckedDefault">Checked</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2"
                type="checkbox"
                value=""
                id="checkDefaultDisabledDefault"
                disabled
              />
              <label class="text-md text-slate-600" for="checkDefaultDisabledDefault"
                >Default Disabled</label
              >
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2"
                type="checkbox"
                value=""
                id="checkCheckedDisabledDefault"
                checked
                disabled
              />
              <label class="text-md text-slate-600" for="checkCheckedDisabledDefault"
                >Checked Disabled</label
              >
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="checkboxV1_default"
          :isHTML="true"
          :codeCSS="checkboxV1_common_css"
          :isCSS="true"
        />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
input[type='checkbox']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
</style>
