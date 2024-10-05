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
const title = "fruitbat's blog" as const;
const description = `Hi! I'm zoe! 
Right now i study software engineering at university, 
but spend a lot of my free time making music and generally being interested in way too many things!
Welcome to my blog :3`;
const icon = "https://zoe.kittycat.homes/favicon.svg";
const iconAlt = "A bat with a funny nose! But its not a fruitbat";
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: `https://zoe.kittycat.homes/`,
  ogSiteName: "fruitbat's blog",
  ogType: "profile",
  profileGender: "she/they",
  ogImage: icon,
  ogImageAlt: iconAlt,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: icon,
  twitterImageAlt: iconAlt,
});
</script>
