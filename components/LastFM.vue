<template>
    <client-only>
      <div v-if="show && track && track.name">
        <NuxtLink
          to="https://last.fm/user/zoebat"
          target="_blank"
          class="btn flex flex-col h-full p-4 rounded-3xl"
        >
        <div class="h-full w-full flex flex-col justify-center items-center gap-4">
          <h3 class="flex flex-wrap flex-row items-center gap-4 font-pattaya text-2xl">
            <MusicalNoteIcon class="w-10 h-10" />
            currently listening to:
          </h3>
          <div class="flex flex-col gap-4">
            <img
                class="rounded-xl"
              v-if="
                track.image &&
                track.image !==
                  'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'
              "
              :src="track.image"
            />
            <div class="">
              <p class="text-lg font-black">
                {{ track.artist }} - {{ track.name }}
              </p>
              <p class="font-sans text-md">{{ track.album }}</p>
            </div>
          </div>
          </div>
        </NuxtLink>
      </div>
    </client-only>
  </template>
  
  <script setup lang="ts">
  import { useFetch } from "#app";
  import { ref } from "vue";
  import { MusicalNoteIcon } from "@heroicons/vue/24/solid";
  
  const show = ref(false);
  
  const { data: track, refresh } = await useFetch<{
    name: string;
    artist: string;
    album: string;
    image: string;
  }>("https://nowplaying.kittycat.homes/zoe");

  await refresh().then(
    () => {
      show.value = true
    }
  )
  </script>