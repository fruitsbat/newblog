<template>
  <div
    :ref="`${props.content._id}`"
    class="carousel-item w-full max-w-xs rounded-xl bg-gradient-to-br from-secondary to-accent text-neutral"
  >
    <div class="flex h-full w-full flex-col justify-between rounded-xl bg-base-100 bg-opacity-95">
      <div>
        <NuxtLink class="w-full" v-if="content.image" :external="true" :to="mainLink()">
          <img
            class="aspect-square w-full rounded-t-xl"
            :src="`/image/${content.image.url}`"
            :alt="content.image.alt"
          />
        </NuxtLink>
        <NuxtLink class="link" :to="mainLink()">
          <h2 class="w-full p-2 text-center text-xl font-bold text-neutral">{{ content.title }}</h2>
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-2 p-2 text-justify">
        <span class="text-sm font-semibold">last updated: {{ date() }}</span>
        <span class="">{{ content.description }}</span>
      </div>
      <div v-if="content.links" class="flex flex-row flex-wrap justify-evenly p-4">
        <NuxtLink :external="true" v-for="link in content.links" class="link flex-grow text-center">
          {{ link.title }}
        </NuxtLink>
      </div>
      <div class="flex justify-evenly p-4" v-else>
        <NuxtLink class="link" :to="mainLink()"> read more... </NuxtLink>
      </div>
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

<style scoped></style>
