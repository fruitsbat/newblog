<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div>
    <h1 class="text-3xl">error {{ error?.statusCode }}! oops...</h1>
    <NuxtLink to="/">fuck go back</NuxtLink>
  </div>
</template>
