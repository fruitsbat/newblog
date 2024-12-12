<template>
  <div class="flex flex-col items-center gap-4">
    <h2 class="text-2xl font-black" v-motion-slide-visible-once-right>theme</h2>
    <div
      class="rounded-3xl bg-gradient-to-tr from-primary to-accent"
      v-motion-slide-visible-once-right
    >
      <div
        class="carousel carousel-center justify-between gap-4 rounded-3xl bg-neutral bg-opacity-95 p-4"
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
