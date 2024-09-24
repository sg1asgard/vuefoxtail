<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Quick Start" />
      <p class="mb-12">You can start using {{ appName }} imediatelly following a few easy steps.</p>

      <section class="mt-8">
        <ol class="list-decimal list-inside">
          <li>
            <strong>Create a new project</strong> with any preferred library or framework (Vue,
            Raect, Nuxt, Laravel, Svelte, etc)
          </li>

          <li class="mt-4">
            <strong>Install or include Tailwind CSS</strong> into your project. Checkout the
            detailed documentation on the official
            <a href="https://tailwindcss.com" target="_blank" class="underline"
              >https://tailwindcss.com</a
            >
            website.
          </li>

          <li class="mt-4">
            <strong>Copy &amp; Paste</strong> components code directly into your code. You're done!
            🎉
          </li>
        </ol>
      </section>
    </MainPart>
  </MainLayout>
</template>
