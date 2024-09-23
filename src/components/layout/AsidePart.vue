<script setup>
import { RouterLink } from 'vue-router'
import HeaderPart from './aside/HeaderPart.vue'
import LinkPart from './aside/LinkPart.vue'
</script>
<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-40rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto border-r-[1px]"
  >
    <nav class="lg:text-sm lg:leading-6 relative">
      <ul class="text-slate-700">
        <li class="mt-12 lg:mt-8">
          <section class="flex flex-col">
            <HeaderPart>Getting started</HeaderPart>
            <RouterLink :to="{ name: 'home' }"><LinkPart>Introduction</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'home' }"><LinkPart>Quick Start</LinkPart></RouterLink>
          </section>
        </li>

        <li class="mt-12 lg:mt-8">
          <section class="flex flex-col">
            <HeaderPart>Forms</HeaderPart>
            <RouterLink :to="{ name: 'form_button' }"><LinkPart>Button</LinkPart></RouterLink>
          </section>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="css" scoped>
a {
  font-size: 18px;
  padding: 4px 0px;
}
</style>
