<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div class="pb-6">
      <h1 class="font-black text-7xl text-center">{{ data.title }}</h1>
      <span class="md:pl-12 indent-4 text-lg text-center">
        last updated:
        <strong class="font-bold">{{ date() }}</strong>
      </span>
    </div>
    <ContentRenderer class="max-w-2xl" :value="data" />
    <CommentForm :slug="path.slice(1)" />
    <NuxtLink
      to="/"
      class="toast flex toast-end btn btn-neutral m-6 p-4 rounded-3xl flex-row items-center justify-center shadow-2xl"
    >
      <HomeIcon class="h-4 w-4" />
      <span>Home</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
import { type ParsedContentExtension } from "~/scripts/parse_extension";
const path = useRoute().path
const data = await queryContent<ParsedContentExtension>(
  path
).findOne();
definePageMeta({
  layout: "blogpost",
});

const date = (): string => {
  return new Date(data.timestamp * 1000).toLocaleString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
    timeZone: "Europe/Berlin",
  });
};
</script>
