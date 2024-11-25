<template>
  <div
    class="box-border break-words transition-all min-h-screen bg-gradient-to-tr from-primary to-secondary text-neutral"
    :data-theme="active"
  >
    <div
      class="min-h-screen flex flex-col items-stretch justify-center w-full bg-base-100 bg-opacity-100"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <footer class="text-center text-sm p-2">
        fruitbat © 2024
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "./stores/theme";
const store = useThemeStore();
const { active } = storeToRefs(store);
watch(active, () => {
  console.log(`theme: ${active.value}`);
});
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
