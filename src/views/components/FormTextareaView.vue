<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import TextareaVFX from '@/components/vuefoxtail/forms/TextareaVFX.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Textarea" />

      <div class="mt-12">
        <TextareaVFX />
      </div>
    </MainPart>
  </MainLayout>
</template>
