<template>
  <client-only>
    <div v-if="show && track && track.name">
      <NuxtLink
        to="https://last.fm/user/zoebat"
        target="_blank"
        class="btn flex h-full flex-col rounded-3xl p-4"
      >
        <div class="flex h-full w-full flex-col items-center justify-center gap-4">
          <h3 class="flex flex-row flex-wrap items-center gap-4 font-pattaya text-2xl">
            <MusicalNoteIcon class="h-10 w-10" />
            currently listening to:
          </h3>
          <div class="flex flex-col gap-4">
            <img
              loading="lazy"
              class="rounded-xl"
              v-if="
                track.image &&
                track.image !==
                  'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'
              "
              :src="track.image"
            />
            <div class="">
              <p class="text-lg font-black">{{ track.artist }} - {{ track.name }}</p>
              <p class="text-md font-sans">{{ track.album }}</p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import { ref } from 'vue'
import { MusicalNoteIcon } from '@heroicons/vue/24/solid'

const show = ref(false)

const { data: track } = await useFetch<{
  name: string
  artist: string
  album: string
  image: string
}>('https://nowplaying.kittycat.homes/zoe').then((item) => {
  show.value = true
  return item
})
</script>
