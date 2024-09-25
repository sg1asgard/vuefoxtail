<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import SelectVFX from '@/components/vuefoxtail/forms/SelectVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Select" />

      <div class="mt-12">
        <SelectVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
