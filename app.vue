<template>
  <ClientOnly>
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
          kittycats rule teh world forevah © 2024
        </footer>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useThemeStore } from "./stores/theme";
const store = useThemeStore();
const { active } = storeToRefs(store);
watch(active, () => {
  console.log(`theme: ${active.value}`);
});
const title = "fruitbat moment" as const;
const description = `Hi! I'm zoe! 
Right now i study software engineering at university, 
but spend a lot of my free time making music and generally being interested in way too many things!
Welcome to my blog :3`;
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: "/favicon.svg",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/favicon.svg",
  twitterImageAlt: "an emoji of a bat! it has a funny nose :)"
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
