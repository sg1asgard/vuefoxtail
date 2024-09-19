<script setup>
import AsidePart from '@/components/layout/AsidePart.vue'
import FooterPart from '@/components/layout/FooterPart.vue'
import TopPart from '@/components/layout/TopPart.vue'
</script>
<template>
  <div>
    <TopPart />
    <div>
      <AsidePart />
      <slot></slot>
    </div>
    <FooterPart />
  </div>
</template>
