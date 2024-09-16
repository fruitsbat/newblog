<template>
  <div class="flex flex-row justify-start items-center gap-4">
    <HomeButton />
    <h1 class="m-0 text-6xl font-bold">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
