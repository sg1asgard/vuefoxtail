<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date())
</script>
<template>
  <footer class="">
    <p>
      Released under the
      <a
        class="vt-link link link"
        href="https://opensource.org/licenses/MIT"
        target="_blank"
        rel="noopener noreferrer"
        >MIT License</a
      >.
    </p>
    <p class="copyright">Copyright © 2024 - {{ currentYear.getFullYear() }} George Antohi</p>
  </footer>
</template>
