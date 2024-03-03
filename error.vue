<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="h-screen p-6 gap-6 w-screen flex flex-col items-center justify-center">
    <h1 class="text-3xl">error {{ error?.statusCode }}!</h1>
    <NuxtLink class="btn" to="/">back home</NuxtLink>
    <p class="text-center text-sm font-italic text-neutral">
      look at you, hacker: a pathetic creature of meat and bone, panting and sweating as you run through my corridors. how can you challenge a perfect, immortal machine?
    </p>
  </div>
</template>
