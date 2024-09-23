<script setup>
import { ref } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'
import PageHeader2 from '@/components/presentation/PageHeader2.vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'

// Checkbox v1
const checkboxV1_small = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px]" type="checkbox" value="" id="checkDefaultSmall" />
  <label class="text-sm" for="checkDefaultSmall">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px]" type="checkbox" value="" id="checkCheckedSmall" checked /> 
  <label class="text-sm" for="checkCheckedSmall">Checked</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px]" type="checkbox" value="" id="checkDefaultDisabledSmall" disabled />
  <label class="text-sm" for="checkDefaultDisabledSmall">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px]" type="checkbox" value="" id="checkCheckedDisabledSmall" checked disabled />
  <label class="text-sm" for="checkCheckedDisabledSmall">Checked</label>
</div>`
)

const checkboxV1_medium = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkDefaultMedium" />
  <label class="text-md" for="checkDefaultMedium">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkCheckedMedium" checked />
  <label class="text-md" for="checkCheckedMedium">Checked</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkDefaultDisabledMedium" disabled />
  <label class="text-md text-slate-600" for="checkDefaultDisabledMedium">Default Disabled</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkCheckedDisabledMedium" checked disabled />
  <label class="text-md text-slate-600" for="checkCheckedDisabledMedium">Default Disabled</label>
</div>
`
)

const checkboxV1_large = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2.5" type="checkbox" value="" id="checkDefaultLarge" />
  <label class="text-xl" for="checkDefaultLarge">Default</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2.5" type="checkbox" value="" id="checkCheckedLarge" checked />
  <label class="text-xl" for="checkCheckedLarge">Checked</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2.5"type="checkbox" value="" id="checkDefaultDisabledLarge" disabled />
  <label class="text-xl text-slate-600" for="checkDefaultDisabledLarge">Default Disabled</label>
</div>
<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2.5"type="checkbox" value="" id="checkCheckedDisabledLarge" checked disabled />
  <label class="text-xl text-slate-600" for="checkCheckedDisabledLarge">Default Disabled</label>
</div>
`
)
</script>

<template>
  <section>
    <div class="mb-12">
      By default, the buttons have three sizes as Small, Medium, Large and one with icon. You can
      add the icon to the rest of the sizes as show in the examples.
    </div>
    <!-- Small -->
    <PageHeader3 sectionTitle="Small" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input class="rounded-[4px]" type="checkbox" value="" id="checkDefaultSmall" />
              <label class="text-sm" for="checkDefaultSmall">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px]"
                type="checkbox"
                value=""
                id="checkCheckedSmall"
                checked
              />
              <label class="text-sm" for="checkCheckedSmall">Checked</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px]"
                type="checkbox"
                value=""
                id="checkDefaultDisabledSmall"
                disabled
              />
              <label class="text-sm" for="checkDefaultDisabledSmall">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px]"
                type="checkbox"
                value=""
                id="checkCheckedDisabledSmall"
                checked
                disabled
              />
              <label class="text-sm" for="checkCheckedDisabledSmall">Checked</label>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="checkboxV1_small" />
      </template>
    </ExampleWrapper>

    <PageHeader3 sectionTitle="Medium" class="mt-8" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input class="rounded-[4px] p-2" type="checkbox" value="" id="checkDefaultMedium" />
              <label class="text-md" for="checkDefaultMedium">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2"
                type="checkbox"
                value=""
                id="checkCheckedMedium"
                checked
              />
              <label class="text-md" for="checkCheckedMedium">Checked</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2"
                type="checkbox"
                value=""
                id="checkDefaultDisabledMedium"
                disabled
              />
              <label class="text-md text-slate-600" for="checkDefaultDisabledMedium"
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
                id="checkCheckedDisabledMedium"
                checked
                disabled
              />
              <label class="text-md text-slate-600" for="checkCheckedDisabledMedium"
                >Checked Disabled</label
              >
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="checkboxV1_medium" />
      </template>
    </ExampleWrapper>

    <PageHeader3 sectionTitle="Large" class="mt-8" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input class="rounded-[4px] p-2.5" type="checkbox" value="" id="checkDefaultLarge" />
              <label class="text-xl" for="checkDefaultLarge">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2.5"
                type="checkbox"
                value=""
                id="checkCheckedLarge"
                checked
              />
              <label class="text-xl" for="checkCheckedLarge">Checked</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2.5"
                type="checkbox"
                value=""
                id="checkDefaultDisabledLarge"
                disabled
              />
              <label class="text-xl text-slate-600" for="checkDefaultDisabledLarge"
                >Default Disabled</label
              >
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2.5"
                type="checkbox"
                value=""
                id="checkCheckedDisabledLarge"
                checked
                disabled
              />
              <label class="text-xl text-slate-600" for="checkCheckedDisabledLarge"
                >Checked Disabled</label
              >
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="checkboxV1_large" />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
input[type='checkbox']:disabled {
  background-color: var(--vfox-c-text-disabled);
}
</style>
