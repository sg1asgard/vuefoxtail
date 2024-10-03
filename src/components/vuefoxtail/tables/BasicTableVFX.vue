<script setup>
import { ref } from 'vue'
import ExampleWrapper from '@/components/presentation/ExampleWrapper.vue'
import CodeExample from '@/components/presentation/CodeExample.vue'

// Select v1
const inputV1_default = ref(
  `<table class="table-auto w-full">
  <thead class="bg-slate-200 text-slate-700">
    <tr> 
      <th scope="col" class="p-2 font-bold">#</th>
      <th scope="col" class="p-2 text-start font-bold">Fruits</th>
      <th scope="col" class="p-2 text-start font-bold">Quantity</th>
      <th scope="col" class="p-2 text-start font-bold">Price</th>
    </tr> 
  </thead>
  <tbody class="text-slate-700">
    <tr class="border-b-[1px] hover:bg-slate-100">
      <th scope="row">1</th>
      <td class="p-2">Orange</td>
      <td class="p-2">1kg</td>
      <td class="p-2">1.89/kg</td>
    </tr>
    <tr class="hover:bg-slate-100">
      <th scope="row">3</th>
      <td class="p-2">Pineapple</td>
      <td class="p-2">1.60kg</td>
      <td class="p-2">3.14/kg</td>
    </tr>
  </tbody>
</table>`
)
</script>

<template>
  <section>
    <!-- <div class="mb-12">
      <p>Basic Table is full width</p>
    </div> -->

    <!-- Default -->
    <ExampleWrapper isHtml isCss isJs>
      <template v-slot:code-items>
        <div class="flex flex-col space-y-6 items-center px-6 py-4">
          <div class="w-full flex-1">
            <table class="table-auto w-full">
              <thead class="bg-slate-200 text-slate-700">
                <tr>
                  <th scope="col" class="p-2 font-bold">#</th>
                  <th scope="col" class="p-2 text-start font-bold">Fruits</th>
                  <th scope="col" class="p-2 text-start font-bold">Quantity</th>
                  <th scope="col" class="p-2 text-start font-bold">Price</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr class="border-b-[1px] hover:bg-slate-100">
                  <th scope="row">1</th>
                  <td class="p-2">Orange</td>
                  <td class="p-2">1kg</td>
                  <td class="p-2">1.89/kg</td>
                </tr>
                <tr class="border-b-[1px] hover:bg-slate-100">
                  <th scope="row">2</th>
                  <td class="p-2">Lemon</td>
                  <td class="p-2">3kg</td>
                  <td class="p-2">2.42/kg</td>
                </tr>
                <tr class="hover:bg-slate-100">
                  <th scope="row">3</th>
                  <td class="p-2">Pineapple</td>
                  <td class="p-2">1.60kg</td>
                  <td class="p-2">3.14/kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>

      <template v-slot:code-example>
        <CodeExample :codeHTML="inputV1_default" :isHTML="true" />
      </template>
    </ExampleWrapper>
  </section>
</template>

<style lang="css" scoped>
textarea:disabled {
  background-color: var(--color-background-disabled-200);
}
</style>
