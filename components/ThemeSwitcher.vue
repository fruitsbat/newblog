<template>
  <div class="join-vertical flex flex-col justify-between gap-4 rounded-3xl bg-accent p-4">
    <h2 class="join-item flex items-center gap-4 text-accent-content">
      <SparklesIcon class="h-12 w-12" />
      <span class="font-macondo text-6xl">theme</span>
    </h2>
    <ThemeDisplay v-for="theme in pickableThemes" :theme-name="theme" />
    <button class="btn" @click="$state.active = ''">
      <TrashIcon class="h-6 w-6" />
      <span>reset</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import ThemeDisplay from './ThemeDisplay.vue'
import { TrashIcon, SparklesIcon } from '@heroicons/vue/24/solid'
const pickableThemes = ['sleepy', 'post-it', 'magic', 'minty', 'oled', 'funky'] as const
const { $state } = useThemeStore()
</script>
