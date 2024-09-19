<script setup>
import AsidePart from '@/components/layout/AsidePart.vue'
import FooterPart from '@/components/layout/FooterPart.vue'
import TopPart from '@/components/layout/TopPart.vue'
</script>
<template>
  <div>
    <TopPart />
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <AsidePart />
      <div class="lg:pl-[19.5rem]">
        <slot></slot>
      </div>
    </div>
    <FooterPart />
  </div>
</template>
