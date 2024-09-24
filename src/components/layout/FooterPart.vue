<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date())
</script>
<template>
  <footer class="mt-12 pt-10 pb-28 text-slate-500 border-t-[1px] border-slate-900/10">
    <div class="flex flex-col items-center">
      <div>
        Released under the
        <a class="vt-link link link" :href="license.url" target="_blank" rel="noopener noreferrer"
          >{{ license.name }} License</a
        >.
      </div>
      <div class="copyright my-2">
        Copyright © 2024 - {{ currentYear.getFullYear() }} Project Hive
      </div>
      <div class="my-8">
        Join us - <a :href="discord.url">{{ discord.name }}</a>
      </div>
    </div>
  </footer>
</template>
