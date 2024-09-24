<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import PageHeader2 from '@/components/presentation/PageHeader2.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader :pageTitle="`Get started with ${appName} library`" />
      <p class="text-2xl mb-12">
        {{ appName }} is a frontend toolkit to help build anything from prototype to production in
        minutes.
      </p>

      <section class="mb-8">
        <PageHeader2 :sectionTitle="`Why use ${appName}`" />
        <p></p>
      </section>
    </MainPart>
  </MainLayout>
</template>
