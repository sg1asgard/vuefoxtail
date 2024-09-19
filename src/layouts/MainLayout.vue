<script setup>
import AsidePart from '@/components/layout/AsidePart.vue'
import FooterPart from '@/components/layout/FooterPart.vue'
import TopPart from '@/components/layout/TopPart.vue'
</script>
<template>
  <div>
    <TopPart />
    <div>
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 bg-zinc-100">
        <AsidePart />
        <div class="lg:pl-[19.5rem] bg-slate-100">
          <div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterPart /> -->
  </div>
</template>
