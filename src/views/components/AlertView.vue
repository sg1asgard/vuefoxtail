<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import AlertVFX from '@/components/vuefoxtail/alert/AlertVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <h1 class="text-3xl font-bold underline">Alerts</h1>

      <div class="mt-12">
        <AlertVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
