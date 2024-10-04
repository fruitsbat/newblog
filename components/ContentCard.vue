<template>
  <div
    class="bg-base-200 rounded-xl p-4 gap-4 flex flex-col @xl:flex-row @xl:items-stretch"
  >
    <NuxtLink
      v-if="content.image"
      :to="mainLink()"
      class="aspect-square w-full @xl:w-auto flex-1 rounded-xl"
    >
      <img
        loading="lazy"
        :src="`/image/${content.image.url}`"
        :alt="content.image.alt"
        class="rounded-xl h-full aspect-square object-cover"
      />
    </NuxtLink>
    <div
      class="flex gap-4 flex-col justify-between flex-1 flex-grow-[1] @2xl:flex-grow-[2] @4xl:flex-grow-[3] @6xl:flex-grow-[5]"
    >
      <div class="flex flex-col gap-2">
        <NuxtLink :to="mainLink()" class="link text-justify">
          <h2 class="font-bold text-2xl">{{ content.title }}</h2>
          <span class="text-sm"
            >last updated: <strong class="font-bold">{{ date() }}</strong></span
          >
        </NuxtLink>
        <span v-if="content.description">{{ content.description }}</span>
        <ContentRenderer v-else class="f" :value="content" :excerpt="true" />
      </div>
      <div class="flex w-full flex-wrap gap-2" v-if="hasLinksField()">
        <NuxtLink
          v-for="l in content.links!"
          class="btn btn-neutral flex-grow rounded-xl"
          :key="l.url"
          :to="l.url"
          >{{ l.title }}</NuxtLink
        >
      </div>
      <NuxtLink v-else class="btn btn-neutral w-full rounded-xl" :to="content._path">read more...</NuxtLink>
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
  return new Date(props.content.timestamp * 1000).toLocaleString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
    timeZone: 'Europe/Berlin'
  })
}
</script>
