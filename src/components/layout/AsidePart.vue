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
            <RouterLink :to="{ name: 'introduction' }"
              ><LinkPart>Introduction</LinkPart></RouterLink
            >
            <RouterLink :to="{ name: 'quick_start' }"><LinkPart>Quick Start</LinkPart></RouterLink>
          </section>
        </li>

        <li class="mt-12 lg:mt-8">
          <section class="flex flex-col">
            <HeaderPart>Forms</HeaderPart>
            <RouterLink :to="{ name: 'form_button' }"><LinkPart>Button</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'form_checkbox' }"><LinkPart>Checkbox</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'form_radio' }"><LinkPart>Radio</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'form_select' }"><LinkPart>Select</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'form_input' }"><LinkPart>Input</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'form_range' }"><LinkPart>Range</LinkPart></RouterLink>
            <RouterLink :to="{ name: 'form_textarea' }"><LinkPart>Textarea</LinkPart></RouterLink>
          </section>
        </li>

        <li class="mt-12 lg:mt-8">
          <section class="flex flex-col">
            <HeaderPart>Components</HeaderPart>
            <RouterLink :to="{ name: 'tables' }"><LinkPart>Table</LinkPart></RouterLink>
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
  margin: 1px 0px;

  &:hover {
    border-radius: 6px;
    background-color: rgb(222, 228, 255);
  }
  &.router-link-active {
    border-radius: 6px;
    background-color: rgb(222, 228, 255);
  }
}
</style>
