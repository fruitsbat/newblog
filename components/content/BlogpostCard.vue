<template>
    <NuxtLink :to="post?.link"
        class="btn m-0 border-none p-0 w-full h-full rounded-3xl flex flex-col justify-between items-stretch join join-vertical">
        <img :src="post.image.link" :alt="post.image.description" class="join-item w-full h-auto" />
        <h2 class="flex items-center justify-center p-4 join-item">
            <span class="text-2xl font-bold">{{ post?.title }}</span>
        </h2>
        <span class="flex-grow flex justify-center flex-col p-4 join-item">{{ post?.summary }}</span>
    </NuxtLink>
</template>

<script setup lang="ts">
import { Page } from '~/content/classes';
defineProps({
    post: {
        type: Page,
        required: true,
    }
})
</script>