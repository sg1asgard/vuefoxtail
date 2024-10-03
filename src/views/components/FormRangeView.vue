<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import RangeVFX from '@/components/vuefoxtail/forms/RangeVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Range" />

      <div class="mt-12">
        <RangeVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
