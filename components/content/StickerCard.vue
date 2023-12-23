<template>
    <div class="p-4 h-full flex flex-col items-center justify-center">
        <img class="w-full h-auto" :alt="sticker.image.description" :src="sticker.image.link">
    </div>
</template>

<script setup lang="ts">
import { Sticker } from '~/content/classes';

defineProps({
    sticker: {
        type: Sticker,
        required: true,
    }
})
</script>