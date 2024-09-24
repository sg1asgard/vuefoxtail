<script setup>
import MainPart from '@/components/layout/MainPart.vue'
import PageHeader from '@/components/presentation/PageHeader.vue'
import PageHeader2 from '@/components/presentation/PageHeader2.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <MainPart>
      <PageHeader pageTitle="Quick Start" />
      <p class="mb-12 text-2xl">
        You can start using {{ appName }} imediatelly following a few easy steps.
      </p>

      <section class="mt-8">
        <ol class="list-decimal list-inside">
          <li>
            <strong>Create a new project</strong> with any preferred library or framework (Vue,
            Raect, Nuxt, Laravel, Svelte, etc)
          </li>

          <li class="mt-6">
            <strong>Install or include Tailwind CSS</strong> into your project. Checkout the
            detailed documentation on the official
            <a href="https://tailwindcss.com" target="_blank" class="underline"
              >https://tailwindcss.com</a
            >
            website.
          </li>

          <li class="mt-6">
            <strong>Copy &amp; Paste</strong> components code directly into your code. You're done!
            🎉
          </li>
        </ol>
      </section>

      <section class="mt-12">
        <PageHeader2 sectionTitle="So, what's next?" />
        <p>Go checkout the built components and see what you can use in your next project.</p>

        <p class="mt-4">
          If you have any questions we have a community over Discord and Telegram. Come join us!
        </p>

        <div class="flex flex-row items-center">
          <div>
            <button
              class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 py-2 text-xl hover:shadow-lg hover:shadow-black/25 transition-all ease-in-out duration-150"
            >
              <span class="grow">Discord</span>
              <span class="icon-[ph--discord-logo-fill] size-7"></span>
            </button>
          </div>
          <div>
            <button
              class="inline-flex flex-row items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md px-4 py-2 text-xl hover:shadow-lg hover:shadow-black/25 transition-all ease-in-out duration-150"
            >
              <span class="grow">Telegram</span>
              <span class="icon-[ph--telegram-logo] size-7"></span>
            </button>
          </div>
        </div>
      </section>
    </MainPart>
  </MainLayout>
</template>
