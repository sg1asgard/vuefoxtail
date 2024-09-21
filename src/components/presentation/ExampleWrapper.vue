<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import copyToClipboard from '@/utils/copytoclipboard'

const copyMe = ref(null)
const elementID = ref(null)

const getID = () => {
  elementID.value = copyMe.value.id
  copyToClipboard(elementID.value)
}
</script>
<template>
  <div class="border-[1px] rounded-xl">
    <slot name="code-items"></slot>
    <div class="flex flex-row px-6 py-4 border-t-[1px] border-b-[1px]">
      <div class="flex-1">html</div>
      <div>
        <span
          @click="getID()"
          ref="copyMe"
          :id="uuidv4()"
          class="icon-[ph--clipboard-light] text-2xl"
        ></span>
      </div>
    </div>
    <div class="flex flex-col space-y-6 p-6">
      <slot name="code-example"></slot>
    </div>
  </div>
</template>
