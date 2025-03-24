<template>
  <NuxtLink
    :external="true"
    @mouseover="borderRadius = getRandomBorderRadius()"
    @mouseleave="borderRadius = getRandomBorderRadius()"
    :to="link.url"
    :style="{ borderRadius: borderRadius }"
    :class="`external-link overflow-visible link flex-grow p-4 text-center text-lg font-semibold odd:bg-primary even:bg-neutral`"
    v-motion-pop-visible-once
    >{{ link.title }}</NuxtLink
  >
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  link: { type: Object as PropType<{ title: string; url: string }>, required: true }
})

const getRandomBorderRadius = (): string => {
  const minRadius = 10
  const randomPercentage = (): number => {
    return Math.floor(Math.random() * (100 - minRadius * 2)) + minRadius
  }
  const percentages = {
    top: randomPercentage(),
    right: randomPercentage(),
    bottom: randomPercentage(),
    left: randomPercentage()
  }
  return `${percentages.top}% ${100 - percentages.top}% `
    .concat(`${100 - percentages.bottom}% ${percentages.bottom}% `)
    .concat('/ ')
    .concat(`${percentages.left}% ${percentages.right}% `)
    .concat(`${100 - percentages.right}% ${100 - percentages.left}%`)
}
const borderRadius = ref(getRandomBorderRadius())
</script>


<style scoped>
    .external-link {
        transition-timing-function: cubic-bezier();
        transition-duration: 1s;
        transition-property: border-radius;
    }
</style>