<template>
  <div>
    <HomeHeading class="min-h-screen" />
    <div class="grid xl:grid-cols-5 gap-4 p-8">
      <ContentNavigation class="xl:col-span-3 drop-shadow-md" />
      <AboutPanel class="xl:col-span-2 drop-shadow-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentNavigation from "~/components/ContentNavigation.vue";
useHead({
  title: "zoe website",
});
</script>
