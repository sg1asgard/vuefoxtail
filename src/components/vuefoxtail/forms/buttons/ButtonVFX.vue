<script setup>
import { ref } from 'vue'

const btnSmall = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-2.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
const btnMedium = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
const btnLarge = ref(
  `<button class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"> Button </button>`
)
</script>

<template>
  <div class="flex flex-row space-x-6 items-center">
    <div>
      <button
        class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-2.5 py-1.5 text-sm hover:shadow-lg hover:shadow-black/25"
      >
        Button
      </button>
    </div>

    <div>
      <button
        class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-3 py-2 hover:shadow-lg hover:shadow-black/25"
      >
        Button
      </button>
    </div>

    <div>
      <button
        class="bg-indigo-200 hover:bg-indigo-300/75 rounded-md px-4 py-3 text-xl hover:shadow-lg hover:shadow-black/25"
      >
        Button
      </button>
    </div>
  </div>

  <div class="py-4">
    <highlightjs autodetect :code="btnSmall" />
    <highlightjs autodetect :code="btnMedium" />
    <highlightjs autodetect :code="btnLarge" />
  </div>
</template>
<style lang="css" scoped></style>
