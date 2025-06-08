<template>
  <div class="flex flex-col items-center gap-4">
    <h2 class="text-2xl font-black">theme</h2>
    <div class="w-full max-w-full rounded-3xl bg-gradient-to-tr from-primary to-accent">
      <div
        class="carousel carousel-center w-full justify-between gap-4 rounded-3xl bg-neutral bg-opacity-95 p-4"
      >
        <ThemeDisplay
          class="carousel-item max-w-xs"
          v-for="theme in pickableThemes"
          :theme-name="theme"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeDisplay from './ThemeDisplay.vue'
const pickableThemes = ['sleepy', 'post-it', 'magic', 'minty', 'oled', 'funky'] as const
</script>
