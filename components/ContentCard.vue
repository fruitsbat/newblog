<template>
  <div class="flex @xl:grid-cols-3 @2xl:grid-cols-12 flex-col gap-2 rounded-3xl bg-base-300 p-4 @xl:grid">
    <NuxtLink
      :to="mainLink()"
      class="h-auto w-full flex-grow-0 rounded-xl @xl:h-full @xl:w-auto @xl:col-span-1 @2xl:col-span-2"
    >
      <img
        loading="lazy"
        :src="`/image/${content.imageURL}`"
        :alt="content.imageAlt"
        class="h-auto w-full rounded-xl object-cover @xl:h-full @6xl:w-auto aspect-square"
      />
    </NuxtLink>
    <div class="@xl:col-span-2 flex flex-grow-[6] flex-col items-start justify-between gap-4 @2xl:col-span-10">
      <div>
        <NuxtLink :to="mainLink()" class="link text-justify ">
          <h2 class="font-bold text-2xl">{{ content.title }}</h2>
          <span class="text-sm">last updated: <bold class="font-bold">{{ date() }}</bold></span>
        </NuxtLink>
        <br>
        <br>
        <span v-if="content.description">{{content.description}}</span>
        <ContentRenderer v-else class="f" :value="content" :excerpt="true" />
      </div>
      <div class="flex w-full flex-wrap gap-2" v-if="hasLinksField()">
        <NuxtLink
          v-for="l in content.links!"
          class="btn flex-grow rounded-xl"
          :key="l.url"
          :to="l.url"
          >{{ l.title }}</NuxtLink
        >
      </div>
      <NuxtLink v-else class="btn w-full rounded-xl" :to="content._path">read more...</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ParsedContentExtension } from '../scripts/parse_extension'
import { type PropType } from 'vue'

const props = defineProps({
  content: {
    type: Object as PropType<ParsedContentExtension>,
    required: true
  }
})

const hasLinksField = () => {
  return props.content.links !== undefined && props.content.links.length > 0
}

const mainLink = (): string => {
  if (hasLinksField()) {
    return props.content.links![0].url
  }
  return props.content._path!
}

const date = (): string => {
  return new Date(props.content.timestamp * 1000).toLocaleString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
    timeZone: "Europe/Berlin",
  });
};
</script>
