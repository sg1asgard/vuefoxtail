<script setup>
import AsidePart from '@/components/layout/AsidePart.vue'
import FooterPart from '@/components/layout/FooterPart.vue'
import TopPart from '@/components/layout/TopPart.vue'
</script>
<template>
  <div>
    <TopPart />
    <AsidePart />
    <slot></slot>
    <FooterPart />
  </div>
</template>
