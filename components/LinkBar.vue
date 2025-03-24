<template>
  <div
    class="link-container flex w-full flex-row flex-wrap items-center justify-evenly gap-4 text-base-100"
  >
  <LinkbarLink v-for="link in links" :link="link"/>
  </div>
</template>

<script setup lang="ts">
const links: Array<{ title: string; url: string }> = [
  { title: 'bandcamp', url: 'https://zoebat.bandcamp.com/' },
  { title: 'bsky', url: 'https://bsky.app/profile/bat.kittycat.homes' },
  { title: 'newgrounds', url: 'https://fruitsbat.newgrounds.com/' },
  { title: 'last.fm', url: 'https://www.last.fm/user/zoebat' },
  { title: 'twitch', url: 'https://www.twitch.tv/zoe_bat' },
  { title: 'rss feed', url: '/index.xml' },
  { title: 'girlfriend page :3', url: 'https://voxelcreatesstuff.github.io/home/'}
]
</script>