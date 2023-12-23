<template>
    <TransitionGroup name="list" tag="ul"
        class="grid gap-4 rounded-3xl flex-grow grid-cols-1 @xl:grid-cols-2 @3xl:grid-cols-3 transition-all">
        <li class="h-full" v-for="(item, index) in shownItems" :key="item.id">
            <ContentBlogpostCard v-if="(item instanceof Page)" :post="item" />
            <ContentMusicCard v-else-if="(item instanceof Music)" :music="item" />
            <ContentStickerCard v-else-if="(item instanceof Sticker)" :sticker="item" />
        </li>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { Page, Content, Music, Sticker } from '../content/classes';

defineProps({
    shownItems: {
        type: Array<Content>,
        required: true,
    }
})
</script>

<style>
.list-enter-active {
    transition: all 0.48s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.list-enter-from {
    opacity: 0;
    transform: scale(1.24);
}
</style>