<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import InputVFX from '@/components/vuefoxtail/forms/InputVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Input" />

      <div class="mt-12">
        <InputVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
