<template>
  <div class="@container">
    <div class="grid w-full h-full gap-4 @2xl:grid-cols-2">
      <ThemeSwitcher class="@md:row-span-2" />
      <ContactDetails class="text-primary-content row-span-1" />
      <div class="grid gap-4 grid-cols-2">
        <a
          class="btn-neutral h-full min-h-[120px] p-4 rounded-3xl btn group"
          href="/index.xml"
        >
          <h2 class="flex gap-4 items-center">
            <span class="text-5xl font-glitch">feed</span>
          </h2>
        </a>
        <NuxtLink
          class="btn-secondary h-full min-h-[120px] p-4 rounded-3xl btn group"
          to="https://ring.bicompact.space/"
        >
          <h2
            class="flex gap-4 font-syncopate items-center text-secondary-content"
          >
            <GlobeAltIcon class="w-12 h-12 group-hover:animate-spin" />
            <span class="text-lg font-syncopate">web<br />ring</span>
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactDetails from "~/components/ContactDetails.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import { GlobeAltIcon } from "@heroicons/vue/24/solid";
</script>
