<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import ButtonVFX from '@/components/vuefoxtail/forms/ButtonVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="button" />

      <div class="mt-12">
        <ButtonVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
