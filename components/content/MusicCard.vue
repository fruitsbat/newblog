<template>
    <div class="rounded-3xl bg-base-200 flex gap-4 flex-col justify-between join join-vertical h-full items-center">
        <img v-if="music.coverImage" :src="music.coverImage.link" :alt="music.coverImage.description" class="join-item" />
        <h2 class="join-item flex items-center">
            <span class="font-bold text-xl p-4">{{ music.title }}</span>
        </h2>
        <audio preload="none" controls class="w-full join-item">
            <source :src="music.audioFile" />
        </audio>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Music } from '~/content/classes';

const props = defineProps({
    music: {
        type: Object as PropType<Music>,
        required: true,
    },
})
</script>