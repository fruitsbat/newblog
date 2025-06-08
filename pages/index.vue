<template>
  <div class="h-full flex flex-col gap-6 p-6">
    <IndexHero />
    <LinkBar />
    <ContentCarousel />
    <ThemeSwitcher class="w-full" />
  </div>
</template>

<script setup lang="ts">
const title = "fruitbat's blog" as const;
const description = `Hi! I'm zoe! 
Right now i study software engineering at university, 
but spend a lot of my free time making music and generally being interested in way too many things!
Welcome to my blog :3`;
const icon = "https://bat.kittycat.homes/favicon.svg";
const iconAlt = "A bat with a funny nose! But its not a fruitbat";
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogUrl: `https://bat.kittycat.homes/`,
  ogSiteName: "fruitbat's blog",
  ogType: "profile",
  profileGender: "they",
  ogImage: icon,
  ogImageAlt: iconAlt,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: icon,
  twitterImageAlt: iconAlt,
});
</script>
