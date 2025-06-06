<template>
  <div class="w-full rounded-3xl bg-neutral" v-motion-slide-visible-once-bottom>
    <div class="flex flex-col rounded-2xl bg-neutral text-neutral-content">
      <TransitionGroup
        class="carousel carousel-center flex min-h-12 w-full gap-2 overflow-x-scroll p-4"
        name="list"
        tag="ul"
      >
        <button
          v-for="tag in availableTags"
          :key="tag[0]"
          @click="toggleTagSelection(tag[0])"
          class="badge btn carousel-item btn-primary"
        >
          <CheckIcon class="h-6 w-6" v-if="selectedTags.includes(tag[0])" />
          {{ tag[0] }}
        </button>
      </TransitionGroup>
      <div class="carousel carousel-center h-[620px] space-x-2 overflow-y-auto px-2 pb-2">
        <ContentCarouselItem v-for="post in postsWithMatchingTags" :content="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
import { type ParsedContentExtension } from '../scripts/parse_extension'

const selectedTags: Ref<Array<string>> = ref([])
const queryResults = await queryContent<ParsedContentExtension>()
  .where({ tags: { $exists: true } })
  .where({ tags: { $contains: selectedTags.value } })
  .sort({ timestamp: -1 })
  .find()

const postsWithMatchingTags = computed(() => {
  if (selectedTags.value.length === 0) {
    return queryResults
  }
  return queryResults.filter((post) => {
    // check if this post has every selected tag
    for (const selectedTag of selectedTags.value) {
      if (!post.tags.includes(selectedTag)) {
        return false
      }
    }
    return true
  })
})

async function toggleTagSelection(tag: string) {
  if (selectedTags.value.includes(tag)) {
    // take tag out if selected tag is clicked again
    selectedTags.value = selectedTags.value.filter((item) => item !== tag)
    return
  }
  selectedTags.value.push(tag)
}

const availableTags = computed(() => {
  let foundTags: Map<string, number> = new Map()
  postsWithMatchingTags.value.forEach((contentItem) => {
    contentItem.tags.forEach((tag) => {
      // put tag in the map if its not already there
      if (foundTags.get(tag) === undefined) {
        foundTags.set(tag, 1)
      } else {
        foundTags.set(tag, foundTags.get(tag)! + 1)
      }
    })
  })
  // sort the map so that the tags are sorted by how often they appear
  // (descending)
  foundTags = new Map([...foundTags].sort((a, b) => b[1] - a[1]))
  return foundTags
})
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.24s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0%;
  transform: scale(0);
}
</style>
