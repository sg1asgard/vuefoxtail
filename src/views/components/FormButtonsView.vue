<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import AlertVFX from '@/components/vuefoxtail/alert/AlertVFX.vue'
import ButtonVFX from '@/components/vuefoxtail/forms/buttons/ButtonVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <h1 class="text-3xl font-bold underline">Buttons</h1>

      <div class="mt-12">
        <ButtonVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
