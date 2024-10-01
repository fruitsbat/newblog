<template>
  <component
    :is="imgComponent"
    :src="refinedSrc"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    :title="props.alt"
  />
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed, resolveComponent } from '#imports'
const dev = import.meta.dev

const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage
  ? resolveComponent('NuxtImg')
  : 'img'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const baseURL = dev ? '' : 'https://zoe.kittycat.homes'
const baseRegex = new RegExp("https://zoe.kittycat.homes")
const refinedSrc = computed(() => {
  const withAppropriateBaseUrl = props.src.replace(baseRegex, baseURL)
  return withAppropriateBaseUrl;
})
</script>
