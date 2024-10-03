<script setup>
import { ref } from 'vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'
import AlertWrapper from '@/components/presentation/alerts/AlertWrapper.vue'

// Checkbox v1
const radioV1_common_csssmall = ref(
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

const radioV1_common_css = ref(
  `// add this once in your main.css

input[type='radio']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
`
)

const radioV1_common_cssmedium = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultMedium" id="radioDefaultMedium_1" />
  <label class="text-md" for="radioDefaultMedium_1">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultMedium" id="radioSelectedMedium_1" checked />
  <label class="text-md" for="radioSelectedMedium_1">Selected</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultMedium_2" id="radioDefaultDisabledMedium_1" disabled />
  <label class="text-md text-slate-600" for="radioDefaultDisabledMedium_1">Default Disabled</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2" type="radio" value="" name="radioDefaultMedium_2" id="radioSelectedDisabledMedium_2" checked disabled />
  <label class="text-md text-slate-600" for="radioSelectedDisabledMedium_2">Checked Disabled</label>
</div>
`
)

const radioV1_common_csslarge = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="p-2.5" type="radio" value="" name="radioDefaultLarge" id="radioDefaultLarge_1" />
  <label class="text-xl" for="radioDefaultLarge_1">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2.5" type="radio" value="" name="radioDefaultLarge" id="radioDefaultLarge_2" checked />
  <label class="text-xl" for="radioDefaultLarge_2">Selected</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2.5" type="radio" value="" name="radioDefaultLarge_2" id="radioDefaultDisabledLarge_2" disabled />
  <label class="text-xl text-slate-600" for="radioDefaultDisabledLarge_2">Default Disabled</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="p-2.5" type="radio" value="" name="radioDefaultLarge_2" id="checkCheckedDisabledLarge_2" checked disabled />
  <label class="text-xl text-slate-600" for="checkCheckedDisabledLarge_2">Selected Disabled</label>
</div>`
)
</script>

<template>
  <section>
    <div class="mb-12">
      <p>
        A radio button form control is best used when you need the user to select only one option
        out of a number of options. For example, you may need to choose a color for a new car:
      </p>

      <ul class="ms-5 mt-2 list-inside list-disc">
        <li>Beige</li>
        <li>Black</li>
        <li>Dark Silver</li>
      </ul>

      <p class="mt-4">In this case you would use radio button.</p>

      <div class="mt-8">
        <AlertWrapper variant="info">
          <strong>Checkbox</strong> form element require
          <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank"
            >@tailwindcss/forms plugin</a
          >.
        </AlertWrapper>
      </div>
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
                name="radioDefaultMedium"
                id="radioDefaultMedium_1"
              />
              <label class="text-md" for="radioDefaultMedium_1">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="p-2"
                type="radio"
                value=""
                name="radioDefaultMedium"
                id="radioSelectedMedium_1"
                checked
              />
              <label class="text-md" for="radioSelectedMedium_1">Selected</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="p-2"
                type="radio"
                value=""
                name="radioDefaultMedium_2"
                id="radioDefaultDisabledMedium_1"
                disabled
              />
              <label class="text-md text-slate-600" for="radioDefaultDisabledMedium_1"
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
                name="radioDefaultMedium_2"
                id="radioSelectedDisabledMedium_2"
                checked
                disabled
              />
              <label class="text-md text-slate-600" for="radioSelectedDisabledMedium_2"
                >Checked Disabled</label
              >
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample
          :codeHTML="radioV1_common_cssmedium"
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
