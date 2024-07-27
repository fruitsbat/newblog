<template>
  <div class="grid gap-4 rounded-3xl bg-secondary p-4 text-secondary-content">
    <h2 class="flex items-center gap-4 font-rammetto text-5xl">
      <MegaphoneIcon class="h-24 w-24" /><span>socials</span>
    </h2>
    <div class="flex w-full">
      <NuxtLink to="https://cohost.org/fruitbat" class="btn btn-ghost flex-grow">cohost</NuxtLink>
      <NuxtLink class="btn btn-ghost flex-grow" to="https://fruitsbat.newgrounds.com/"
        >newgrounds</NuxtLink
      >
      <NuxtLink to="https://www.twitch.tv/zoe_bat" class="btn btn-ghost flex-grow">twitch</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MegaphoneIcon } from '@heroicons/vue/24/solid'
</script>
