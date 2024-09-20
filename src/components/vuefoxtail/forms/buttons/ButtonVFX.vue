<script setup>
import { ref } from 'vue'

// Button v1
const btnSmall = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-2.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
const btnMedium = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
const btnLarge = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>`
)

// Button v2
const btnSmall_v2 = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
const btnMedium_v2 = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
const btnLarge_v2 = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
</script>

<template>
  <section>
    <!-- Button v1 -->
    <div class="flex flex-row space-x-6 items-center">
      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-2.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
        >
          Small Button
        </button>
      </div>

      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"
        >
          Medium Button
        </button>
      </div>

      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-4 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
        >
          Large Button
        </button>
      </div>
    </div>

    <div class="py-4 flex flex-col space-y-6">
      <div>
        <span>Small</span>
        <highlightjs autodetect :code="btnSmall" />
      </div>

      <div>
        <span>Medium</span>
        <highlightjs autodetect :code="btnMedium" />
      </div>

      <div>
        <span>Large</span>
        <highlightjs autodetect :code="btnLarge" />
      </div>
    </div>
  </section>

  <section class="mt-16">
    <!-- Button v2 -->
    <div class="flex flex-row space-x-6 items-center">
      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-3.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
        >
          Button
        </button>
      </div>

      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-5 py-2 hover:shadow-lg hover:shadow-black/25"
        >
          Button
        </button>
      </div>

      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-full px-6 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
        >
          Button
        </button>
      </div>
    </div>

    <div class="py-4 flex flex-col space-y-6">
      <div>
        <span>Small</span>
        <highlightjs autodetect :code="btnSmall_v2" />
      </div>

      <div>
        <span>Medium</span>
        <highlightjs autodetect :code="btnMedium_v2" />
      </div>

      <div>
        <span>Large</span>
        <highlightjs autodetect :code="btnLarge_v2" />
      </div>
    </div>
  </section>

  <section class="mt-16">
    <!-- Button v3 -->
    <div class="flex flex-row space-x-6 items-center">
      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-2.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
        >
          Small Button
        </button>
      </div>

      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"
        >
          Medium Button
        </button>
      </div>

      <div>
        <button
          class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-4 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
        >
          Large Button
        </button>
      </div>
    </div>

    <div class="py-4 flex flex-col space-y-6">
      <div>
        <span>Small</span>
        <highlightjs autodetect :code="btnSmall_v2" />
      </div>

      <div>
        <span>Medium</span>
        <highlightjs autodetect :code="btnMedium_v2" />
      </div>

      <div>
        <span>Large</span>
        <highlightjs autodetect :code="btnLarge_v2" />
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped></style>
