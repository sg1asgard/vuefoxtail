<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import AlertVFX from '@/components/vuefoxtail/alert/AlertVFX.vue'
import ButtonVFX from '@/components/vuefoxtail/forms/buttons/ButtonVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="buttons" />

      <div class="mt-12">
        <ButtonVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
