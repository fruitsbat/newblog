<template>
  <div
    class="box-border break-words text-base-content transition-all min-h-screen bg-gradient-to-tr from-primary to-secondary"
    :data-theme="store.$state.active">
    <div class="min-h-screen w-full bg-base-100 bg-opacity-95">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "./stores/theme"
const store = useThemeStore()
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.24s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9) rotateX(-10deg);
  filter: blur(1rem);
}
</style>
