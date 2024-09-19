<script setup>
import { RouterLink } from 'vue-router'
import HeaderPart from './aside/HeaderPart.vue'
</script>
<template>
  <aside
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto"
  >
    <nav class="lg:text-sm lg:leading-6 relative">
      <div class="group">
        <section class="flex flex-col">
          <HeaderPart>Getting started</HeaderPart>
          <RouterLink :to="{ name: 'home' }">Introduction</RouterLink>
          <RouterLink :to="{ name: 'home' }">Quick Start</RouterLink>
        </section>
      </div>
    </nav>
  </aside>
</template>

<style lang="css" scoped></style>
