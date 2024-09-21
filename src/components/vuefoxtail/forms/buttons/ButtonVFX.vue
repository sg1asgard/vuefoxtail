<script setup>
import { ref, reactive } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'
import PageHeader2 from '@/components/presentation/PageHeader2.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'

// Button v1
const buttonsV1 = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25">Button</button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>`
)

// Button v2
const btnSmall_v2 = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-6 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>`
)

// Button v3
const btnSmall_v3 = ref(
  `<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>`
)

// Button v4
const btnSmall_v4 = ref(
  `<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>`
)

// Button v5
const btnSmall_v5 = ref(
  `<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
</script>

<template>
  <section>
    <!-- Button v1 -->
    <PageHeader2 sectionTitle="Fill button" designVersion="bt.v1" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="flex flex-row space-x-6 items-center p-6">
          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>

          <div>
            <button
              class="flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">Large Button</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="buttonsV1" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v2 -->
    <PageHeader2 sectionTitle="fill button" designVersion="bt.v2" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="flex flex-row space-x-6 items-center p-6">
          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="btnSmall_v2" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v3 -->
    <PageHeader2 sectionTitle="fill button" designVersion="bt.v3" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="flex flex-row space-x-6 items-center p-6">
          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="xml" :codeExample="btnSmall_v3" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v4 -->
    <PageHeader2 sectionTitle="outline button" designVersion="bt.v4" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="flex flex-row space-x-6 items-center p-6">
          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="xml" :codeExample="btnSmall_v4" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v5 -->
    <PageHeader2 sectionTitle="fill button" designVersion="bt.v5" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="flex flex-row space-x-6 items-center p-6">
          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div>
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="xml" :codeExample="btnSmall_v5" />
      </template>
    </ExampleWrapper>
  </section>
</template>
<style lang="css" scoped></style>
