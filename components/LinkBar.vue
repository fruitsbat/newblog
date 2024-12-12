<template>
  <div
    class="link-container flex w-full flex-row flex-wrap items-center justify-evenly gap-4 text-base-100"
  >
    <NuxtLink
      :external="true"
      v-for="(link, index) in links"
      @mouseover="borderRadii[index] = randomFancyBorderRadius()"
      @mouseleave="borderRadii[index] = randomFancyBorderRadius()"
      :to="link.url"
      :style="{ borderRadius: borderRadii[index] }"
      :class="`external-link link flex-grow p-4 text-center text-lg font-semibold odd:bg-primary even:bg-neutral`"
      v-motion-pop-visible-once
      >{{ link.title }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
const links: Array<{ title: string; url: string }> = [
  { title: 'bandcamp', url: 'https://zoebat.bandcamp.com/' },
  { title: 'bsky', url: 'https://bsky.app/profile/bat.kittycat.homes' },
  { title: 'newgrounds', url: 'https://fruitsbat.newgrounds.com/' },
  { title: 'last.fm', url: 'https://www.last.fm/user/zoebat' },
  { title: 'twitch', url: 'https://www.twitch.tv/zoe_bat' },
  { title: 'feed', url: '/index.xml' }
]

const randomFancyBorderRadius = (): string => {
  const minRadius = 1
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
    .concat(`${percentages.left}% ${100 - percentages.left}% `)
    .concat(`${100 - percentages.right}% ${percentages.right}%`)
}

const borderRadii: Ref<Array<string>> = ref(links.map((_) => randomFancyBorderRadius()))

console.log(randomFancyBorderRadius())
</script>

<style scoped>
    .external-link {
        transition-timing-function: cubic-bezier();
        transition-duration: 1s;
    }
</style>