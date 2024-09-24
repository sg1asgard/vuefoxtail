<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader :pageTitle="`Get started with ${appName} library`" />
      <p>
        {{ appName }} is a powerful, feature-packed frontend toolkit. Build anything—from prototype
        to production—in minutes.
      </p>
    </MainPart>
  </MainLayout>
</template>
