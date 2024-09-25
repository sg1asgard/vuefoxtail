<script setup>
import { ref } from 'vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Checkbox v1
const selectV1_common_csssmall = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input type="radio" value="" name="radioDefaultSmall" id="radioDefaultSmall_1" />
  <label class="text-sm" for="radioDefaultSmall_1">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input type="radio" value="" name="radioDefaultSmall" id="radioSelectedSmall_1" checked />
  <label class="text-sm" for="radioSelectedSmall_1">Selected</label>
</div>
<div class="flex flex-row items-center space-x-2"> 
  <input type="radio" value="" name="radioDefaultSmall_2" id="radioDefaultDisabledSmall_1" disabled />
  <label class="text-sm" for="radioDefaultDisabledSmall_1">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input type="radio" value="" name="radioDefaultSmall_2" id="radioSelectedDisabledSmall_2" checked disabled />
  <label class="text-sm" for="radioSelectedDisabledSmall_2">Selected</label>
</div>`
)

const selectV1_common_css = ref(
  `// add this once in your main.css

input[type='radio']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
`
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
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input type="radio" value="" name="radioDefaultSmall" id="radioDefaultSmall_1" />
              <label class="text-sm" for="radioDefaultSmall_1">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                type="radio"
                value=""
                name="radioDefaultSmall"
                id="radioSelectedSmall_1"
                checked
              />
              <label class="text-sm" for="radioSelectedSmall_1">Selected</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                type="radio"
                value=""
                name="radioDefaultSmall_2"
                id="radioDefaultDisabledSmall_1"
                disabled
              />
              <label class="text-sm" for="radioDefaultDisabledSmall_1">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                type="radio"
                value=""
                name="radioDefaultSmall_2"
                id="radioSelectedDisabledSmall_2"
                checked
                disabled
              />
              <label class="text-sm" for="radioSelectedDisabledSmall_2">Selected</label>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="selectV1_common_csssmall"
          :codeCSS="selectV1_common_css"
          :isHTML="true"
          :isCSS="true"
        />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
input[type='radio']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
</style>
