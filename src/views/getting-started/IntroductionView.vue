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
        <p class="mb-4">
          As coders and designers we like to reuse features without the need to rebuild from scratch
          components and designs every single time we start a brand new project.
        </p>
        <p class="mb-4">
          Now we have the option to reuse already made components! Isn't that sweet? 🎉
        </p>
      </section>

      <section class="mb-8">
        <PageHeader2 :sectionTitle="`Built on Tailwind CSS`" />
        <p class="mb-4">
          We chose Tailwind CSS due to it flexibility and modularity. It has a great design system
          with sizes, colors, typography, shadows, responsiveness and many more other attributes and
          properties. It is easy to install, use and configure and in generally comes in small
          factor 10 to 20 kb for most of the projects.
        </p>

        <p>
          It comes also with great support for Vue, React, Angular, Blade, Svelte, Laravel, and many
          more other.
        </p>
      </section>

      <section class="mb-8">
        <PageHeader2 :sectionTitle="`What can I use it for?`" />
        <p class="mb-4">
          You can build with it any kind of project you would like to. Checkout out our
          <a :href="license.url" target="_blank" class="underline">License</a>.
        </p>
      </section>
    </MainPart>
  </MainLayout>
</template>
