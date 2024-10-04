<template>
  <img
    loading="lazy"
    :src="refinedSrc"
    :alt="props.alt"
    :title="props.alt"
  />
</template>

<script setup lang="ts">
import { computed } from '#imports'
const dev = import.meta.dev

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
