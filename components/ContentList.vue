<template>
  <div class="@container">
    <TransitionGroup
      name="list"
      tag="ul"
      class="flex-grow columns-1 transition-all @md:columns-2 @lg:columns-3 @7xl:columns-5"
    >
      <li v-for="(item, index) in shownItems" :key="item.id" class="break-inside-avoid py-2">
        <ContentBlogpostCard v-if="item instanceof Page" :post="item" />
        <ContentMusicCard v-else-if="item instanceof Music" :music="item" />
        <ContentStickerCard v-else-if="item instanceof Sticker" :sticker="item" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { Page, Content, Music, Sticker } from '../content/classes'

defineProps({
  shownItems: {
    type: Array<Content>,
    required: true
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
