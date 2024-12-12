<template>
  <div class="flex flex-col w-full justify-center items-center gap-6">
    <section>
      <article class="h-entry">
        <div class="pb-6">
          <h1 class="font-black text-7xl text-center p-name">
            {{ data.title }}
          </h1>
          <span class="md:pl-12 indent-4 text-lg text-center">
            last updated:
            <time class="font-bold dt-updated">{{ date() }}</time>
          </span>
        </div>
        <ContentRenderer class="max-w-2xl e-content" :value="data" />
      </article>
    </section>
    <FloatingHomeButton />
  </div>
</template>

<script setup lang="ts">
import {
  type ParsedContentExtension,
  type SubmissionExtension,
} from "~/scripts/parse_extension";

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

const comments = await queryContent<SubmissionExtension>(
  `/comments/${slug.value}`
)
  .sort({ timestamp: -1 })
  .where({ reply: { $exists: false } })
  .find();

const imageData = computed(() => {
  return data.image
    ? {
        url: `https://zoe.kittycat.homes/image/${data.image.url}`,
        alt: data.image.alt,
      }
    : { url: undefined, alt: undefined };
});

useSeoMeta({
  title: data.title,
  ogTitle: data.title,
  description: data.description,
  ogDescription: data.description,
  articleTag: data.tags,
  ogUrl: `https://zoe.kittycat.homes${data._path}`,
  ogSiteName: "fruitbat's blog",
  ogType: "article",
  profileGender: "she/they",
  ogImage: imageData.value.url,
  ogImageAlt: imageData.value.alt,
  twitterTitle: data.title,
  twitterDescription: data.description,
  twitterImage: imageData.value.url,
  twitterImageAlt: imageData.value.alt,
});
</script>
