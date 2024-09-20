<script setup>
import { ref } from 'vue'

const codeVisibility = ref(true)
</script>
<template>
  <div class="">
    <div @click="codeVisibility = !codeVisibility">Show code</div>
    <div :class="`${!codeVisibility ? 'hidden' : 'block'}`">
      <pre>
        <code class="language-css">
          <slot></slot>
        </code>
      </pre>
    </div>
  </div>
</template>
