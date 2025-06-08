<template>
  <div
    v-if="data"
    class="flex flex-col w-full justify-center items-center gap-6"
  >
    <section>
      <article class="h-entry">
        <div class="p-6">
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
const data = await queryCollection("blog").path(useRoute().path).first()

const date = (): string => {
  return new Date((data?.timestamp ?? 0) * 1000).toLocaleString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
    timeZone: "Europe/Berlin",
  });
};

const imageData = computed(() => {
  return data!.image
    ? {
        url: `https://zoe.kittycat.homes/image/${data!.image.url}`,
        alt: data!.image.alt,
      }
    : { url: undefined, alt: undefined };
});

useSeoMeta({
  title: data?.title ?? "404",
  ogTitle: data?.title ?? "404",
  description: data?.description ?? "not found",
  ogDescription: data?.description ?? "not found",
  articleTag: data?.tags,
  ogUrl: data
    ? `https://bat.kittycat.homes${data.path}`
    : "https://bat.kittycat.homes",
  ogSiteName: "fruitbat's blog",
  ogType: "article",
  profileGender: "they",
  ogImage: imageData.value.url,
  ogImageAlt: imageData.value.alt,
  twitterTitle: data?.title ?? "404",
  twitterDescription: data?.description ?? "not found",
  twitterImage: imageData.value.url,
  twitterImageAlt: imageData.value.alt,
});
</script>
