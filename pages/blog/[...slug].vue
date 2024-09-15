<template>
  <div class="flex flex-col w-full justify-center items-center">
    <div class="pb-6">
      <HeadingWithHomeButton v-if="data.title" :title="data.title" />
      <span class="pl-12 indent-4 text-lg">
        last updated:
        <strong class="font-bold">{{ date() }}</strong>
      </span>
    </div>
    <ContentRenderer class="max-w-2xl" :value="data" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { type ParsedContentExtension } from "~/scripts/parse_extension";

const data = await queryContent<ParsedContentExtension>(
  useRoute().path
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
