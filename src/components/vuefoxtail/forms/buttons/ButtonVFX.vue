<script setup>
import { ref } from 'vue'
import CodeWrapper from '@/components/presentation/CodeWrapper.vue'
import PageHeader2 from '@/components/presentation/PageHeader2.vue'
import PageHeader3 from '@/components/presentation/PageHeader3.vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'

// Button v1
const buttonsV1_fill = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25">Button</button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">With Icon</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
)

const buttonsV1_gradient = ref(
  `<button class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25 inline-block">Button</button>
<button class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25 inline-block"> Button </button>
<button class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25 inline-block"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">With Icon</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
)

// Button v2
const btnSmallV2_fill = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-6 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">Large Button</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
)

const btnSmallV2_gradient = ref(
  `<button class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">Large Button</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
)

// Button v3
const btnSmallV3_fill = ref(
  `<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">Large Button</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
)

const btnSmallV3_gradient = ref(
  `<button class="bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">Large Button</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
)

// Button v4
const btnSmall_v4 = ref(
  `<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>
<button class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>

// with icon
<button class="inline-flex flex-row items-center space-x-2 bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25">
  <span class="grow">Large Button</span>
  <span class="icon-[ph--heart-light]"></span>
</button>`
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
    <!-- Fill -->
    <PageHeader2 sectionTitle="button v1" />
    <PageHeader3 sectionTitle="Fill Color" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25 inline-block"
            >
              Small Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25 inline-block"
            >
              Medium Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25 inline-block"
            >
              Large Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">With Icon</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="buttonsV1_fill" />
      </template>
    </ExampleWrapper>

    <!-- Gradient -->
    <PageHeader3 sectionTitle="Gradient Color" class="mt-8" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25 inline-block"
            >
              Small Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25 inline-block"
            >
              Medium Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25 inline-block"
            >
              Large Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-md px-5 py-2.5 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">With Icon</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="buttonsV1_gradient" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v2 -->
    <PageHeader2 sectionTitle="button v2" />
    <PageHeader3 sectionTitle="fill color" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">Large Button</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="btnSmallV2_fill" />
      </template>
    </ExampleWrapper>

    <PageHeader3 sectionTitle="gradient color" class="mt-8" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-gradient-to-t from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500 text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">Large Button</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="javascript" :codeExample="btnSmallV2_gradient" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v3 -->
    <PageHeader2 sectionTitle="button v3" />
    <PageHeader3 sectionTitle="fill color" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">Large Button</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="xml" :codeExample="btnSmallV3_fill" />
      </template>
    </ExampleWrapper>

    <PageHeader3 sectionTitle="gradient color" class="mt-8" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-3 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-4 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-gradient-to-t from-slate-200 to-white hover:from-indigo-500 hover:to-indigo-500/75 border-2 border-indigo-500 hover:text-white rounded-md px-5 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">Large Button</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="xml" :codeExample="btnSmallV3_gradient" />
      </template>
    </ExampleWrapper>
  </section>

  <section class="mt-16">
    <!-- Button v4 -->
    <PageHeader2 sectionTitle="button v4" />
    <PageHeader3 sectionTitle="fill color" />
    <ExampleWrapper>
      <template v-slot:code-items>
        <div class="items-center px-6 py-4 space-y-2">
          <div class="inline-flex me-2">
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
            >
              Small Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"
            >
              Medium Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              Large Button
            </button>
          </div>

          <div class="inline-flex me-2">
            <button
              class="inline-flex flex-row items-center space-x-2 bg-white hover:bg-indigo-500 border-2 border-indigo-500 hover:text-white rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
            >
              <span class="grow">Large Button</span>
              <span class="icon-[ph--heart-light]"></span>
            </button>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeWrapper lang="xml" :codeExample="btnSmall_v4" />
      </template>
    </ExampleWrapper>
  </section>
</template>
