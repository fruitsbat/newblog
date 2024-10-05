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
    <FloatingHomeButton />
  </div>
</template>

<script setup lang="ts">

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

useSeoMeta({
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
