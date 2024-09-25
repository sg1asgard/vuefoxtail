<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import RadioVFX from '@/components/vuefoxtail/forms/buttons/RadioVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Select" />

      <div class="mt-12">
        <RadioVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
