<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import BasicTableVFX from '@/components/vuefoxtail/tables/BasicTableVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Table" />

      <div class="mt-12">
        <BasicTableVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
