<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date())
</script>
<template>
  <footer
    class="mt-12 pt-10 pb-28 sm:flex justify-between text-slate-500 border-t-[1px] border-slate-900/10"
  >
    <div>
      <p>
        Released under the
        <a class="vt-link link link" :href="license.url" target="_blank" rel="noopener noreferrer"
          >{{ license.name }} License</a
        >.
      </p>
      <p class="copyright">Copyright © 2024 - {{ currentYear.getFullYear() }} George Antohi</p>
    </div>
  </footer>
</template>
