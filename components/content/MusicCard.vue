<template>
  <div
    class="join join-vertical flex h-full flex-col items-center justify-between gap-4 rounded-3xl bg-base-200"
  >
    <img
      v-if="music.coverImage"
      :src="music.coverImage.link"
      :alt="music.coverImage.description"
      class="join-item"
    />
    <h2 class="join-item flex items-center">
      <span class="p-4 font-bold text-xl">{{ music.title }}</span>
    </h2>
    <audio preload="none" controls class="join-item w-full">
      <source :src="music.audioFile" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Music } from '~/content/classes'

const props = defineProps({
  music: {
    type: Object as PropType<Music>,
    required: true
  }
})
</script>
