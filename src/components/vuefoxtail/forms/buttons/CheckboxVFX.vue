<script setup>
import { ref } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'
import PageHeader2 from '@/components/presentation/PageHeader2.vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'

// Button v1
const checkboxV1_small = ref(
  `<div class="flex flex-row items-center space-x-2">
  <input class="rounded-[4px] p-2" type="checkbox" value="" id="flexCheckDefault" />
  <label class="" for="flexCheckDefault">Default</label>
</div>`
)
</script>

<template>
  <section>
    <div class="mb-12">
      By default, the buttons have three sizes as Small, Medium, Large and one with icon. You can
      add the icon to the rest of the sizes as show in the examples.
    </div>
    <!-- Button v1 -->
    <!-- Small -->
    <PageHeader2 sectionTitle="button v1" />
    <PageHeader3 sectionTitle="Small" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input class="rounded-[4px] p-2" type="checkbox" value="" id="flexCheckDefault" />
              <label class="" for="flexCheckDefault">Default</label>
            </div>
          </div>

          <div class="inline-flex me-2">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="" for="flexCheckChecked">Checked</label>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="checkboxV1_small" />
      </template>
    </ExampleWrapper>

    <PageHeader3 sectionTitle="Large" class="mt-8" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input class="rounded-[4px] p-2.5" type="checkbox" value="" id="flexCheckDefault" />
              <label class="text-xl" for="flexCheckDefault">Default</label>
            </div>
          </div>

          <div class="inline-flex me-6">
            <div class="flex flex-row items-center space-x-2">
              <input
                class="rounded-[4px] p-2.5"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="text-xl" for="flexCheckDefault">Checked</label>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="checkboxV1_small" />
      </template>
    </ExampleWrapper>
  </section>
</template>
