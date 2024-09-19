<script setup>
import { RouterLink } from 'vue-router'
import HeaderPart from './aside/HeaderPart.vue'
</script>
<template>
  <aside class="z-10 bg-slate-200 p-8">
    <nav>
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

<style lang="css" scoped>
aside {
  position: fixed;
  left: 0;
  top: 54.5px;
  width: var(--vfox-sidebar-width-small);
  height: 100vh;
}
</style>
