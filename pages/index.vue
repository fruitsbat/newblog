<template>
  <div>
    <HomeHeading class="min-h-screen" />
    <div class="grid xl:grid-cols-5 gap-4 p-8">
      <Suspense>
        <ContentNavigation class="xl:col-span-3 drop-shadow-md" />
      </Suspense>
      <AboutPanel class="xl:col-span-2 drop-shadow-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentNavigation from "~/components/ContentNavigation.vue";
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
