<script setup>
import { ref } from 'vue'
import cachyosLogo from '@/assets/logos/cachyos.svg'

const currentYear = ref(new Date())
</script>
<template>
  <footer class="mt-12 pt-10 pb-28 text-slate-500 border-t-[1px] border-slate-900/10">
    <div class="flex flex-col items-center">
      <div>
        Released under the
        <a class="underline" :href="license.url" target="_blank" rel="noopener noreferrer"
          >{{ license.name }} License</a
        >.
      </div>
      <div class="copyright my-2">
        Copyright © 2024 - {{ currentYear.getFullYear() }} Project Hive
      </div>
      <div class="my-8">
        <div class="flex items-center justify-center mb-4">
          Join our community <span class="icon-[ph--chats] size-6 ms-2 text-indigo-500"></span>
        </div>
        <div class="flex flex-row space-x-4">
          <a
            :href="discord.url"
            target="_blank"
            class="inline-flex space-x-2 items-center px-3 py-1.5 rounded-lg border-[1px] border-slate-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-150 ease-in-out"
            ><span>{{ discord.name }}</span
            ><span class="icon-[ph--discord-logo-fill] size-6"></span
          ></a>

          <a
            :href="telegram.url"
            target="_blank"
            class="inline-flex space-x-2 items-center px-3 py-1.5 rounded-lg border-[1px] border-slate-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-150 ease-in-out"
            ><span>{{ telegram.name }}</span
            ><span class="icon-[ph--telegram-logo-fill] size-6"></span
          ></a>
        </div>
      </div>

      <div class="my-6 text-center">
        <div>We ❤️ and support Open Source! Checkout our friends.</div>
        <!-- TODO: ask permissions for logos -->
        <div class="mt-4 flex space-x-8 justify-center items-center">
          <a href="https://cachyos.org" target="_blank" class="inline-flex items-center">
            <img :src="cachyosLogo" alt="CachyOS - https://cachyos.org" class="size-12" />
            <span class="text-2xl font-bold ms-4">CachyOS</span>
          </a>

          <!-- <a href="https://fedoraproject.org" target="_blank" class="inline-flex items-center">
            <img
              :src="fedoraLogo"
              alt="Fedora Project - https://fedoraproject.org"
              class="max-h-10"
            />
          </a> -->

          <!-- <a href="https://itsfoss.com" target="_blank" class="inline-flex items-center">
            <img :src="vueLogo" alt="IT'S FOSS - https://itsfoss.com" class="max-h-12" />
          </a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped></style>
