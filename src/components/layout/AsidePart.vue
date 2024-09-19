<script setup>
import { RouterLink } from 'vue-router'
import HeaderPart from './aside/HeaderPart.vue'
</script>
<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-40rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto border-r-[1px]"
  >
    <nav class="lg:text-sm lg:leading-6 relative">
      <ul>
        <li class="mt-12 lg:mt-8">
          <section class="flex flex-col">
            <HeaderPart>Getting started</HeaderPart>
            <RouterLink :to="{ name: 'home' }">Introduction</RouterLink>
            <RouterLink :to="{ name: 'home' }">Quick Start</RouterLink>
          </section>
        </li>
      </ul>
    </nav>
  </div>
</template>
