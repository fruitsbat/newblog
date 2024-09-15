<template>
  <HeadingWithHomeButton v-if="data.title" :title="data.title" />
  <span class="text-base-content">
    last updated:
    <strong>{{ date() }}</strong>
  </span>
  <ContentRenderer :value="data" />
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
