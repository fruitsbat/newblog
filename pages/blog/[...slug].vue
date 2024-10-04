<template>
  <div class="flex flex-col w-full justify-center items-center gap-6">
    <div>
      <div class="pb-6">
        <h1 class="font-black text-7xl text-center">{{ data.title }}</h1>
        <span class="md:pl-12 indent-4 text-lg text-center">
          last updated:
          <strong class="font-bold">{{ date() }}</strong>
        </span>
      </div>
      <ContentRenderer class="max-w-2xl" :value="data" />
    </div>
    <CommentForm :slug="slug"></CommentForm>
    <div class="flex flex-col w-full gap-4 max-w-2xl">
      <CommentDisplay
        v-for="item in comments"
        :comment="item"
        :path="slug"
      ></CommentDisplay>
    </div>
    <NuxtLink
      @click="loadingHome = true"
      to="/"
      class="toast flex toast-end btn btn-neutral m-6 p-4 rounded-3xl flex-row items-center justify-center shadow-2xl"
    >
      <div v-if="loadingHome" class="h-4 w-4 loading loading-ring"></div>
      <HomeIcon v-else class="h-4 w-4" />
      <span>Home</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/24/solid";
import {
  type ParsedContentExtension,
  type CommentExtension,
} from "~/scripts/parse_extension";

const loadingHome = ref(false);

const data = await queryContent<ParsedContentExtension>(
  useRoute().path
).findOne();
definePageMeta({
  layout: "blogpost",
});

const slug = computed((): string => {
  return useRoute().path.split("/").at(-1)!;
});

const date = (): string => {
  return new Date(data.timestamp * 1000).toLocaleString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
    timeZone: "Europe/Berlin",
  });
};

const comments = await queryContent<CommentExtension>(`/comments/${slug.value}`)
  .sort({ timestamp: -1 })
  .where({ reply: { $exists: false } })
  .find();

useServerSeoMeta({
  title: data.title,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  ogImage: data.image? data.image.url : undefined,
  twitterTitle: data.title,
  twitterDescription: data.description,
  twitterImage: data.image? data.image.url : undefined,
  twitterImageAlt: data.image? data.image.alt : undefined,
});
</script>
