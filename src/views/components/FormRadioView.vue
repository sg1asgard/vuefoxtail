<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import CheckboxVFX from '@/components/vuefoxtail/forms/buttons/CheckboxVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Radio" />

      <div class="mt-12">
        <CheckboxVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
