<template>
  <div class="w-full rounded-3xl bg-neutral">
    <div class="flex flex-col rounded-2xl bg-neutral text-neutral-content">
      <TransitionGroup
        class="carousel carousel-center flex min-h-12 w-full gap-2 overflow-x-scroll p-4"
        name="list"
        tag="ul"
      >
        <button
          v-for="tag in availableTags"
          :key="tag"
          @click="toggleTagSelection(tag)"
          class="badge btn carousel-item btn-primary"
        >
          <CheckIcon class="h-6 w-6" v-if="selectedTags.includes(tag)" />
          {{ tag }}
        </button>
      </TransitionGroup>
      <div class="carousel carousel-center h-[620px] space-x-2 overflow-y-auto px-2 pb-2">
        <ContentCarouselItem v-for="post in availablePosts" :content="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'

const [blogData, linksData] = await Promise.all([
  await useAsyncData('blogNavigation', async () => queryCollection('blog').all()),
  await useAsyncData('linksNavigation', async () => queryCollection('links').all())
])

const content = [...(blogData.data.value ?? []), ...(linksData.data.value ?? [])].sort(
  (a, b) => b.timestamp - a.timestamp
)

const selectedTags = ref<Array<string>>([])

const availablePosts = computed(() => {
  if (selectedTags.value.length === 0) {
    return content
  }

  return content.filter((post) => selectedTags.value.every((tag) => post.tags.includes(tag)))
})

const availableTags = computed(() => {
  const tags: Map<string, number> = new Map()
  availablePosts.value
    .flatMap((element) => element.tags)
    .forEach((tag) => {
      const count = tags.get(tag)
      if (count === undefined) {
        tags.set(tag, 0)
        return
      }
      tags.set(tag, count + 1)
    })

  return Array.from(tags.entries())
    .sort(([, aCount], [, bCount]) => bCount - aCount)
    .map(([tag]) => tag)
})

const toggleTagSelection = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((item) => item !== tag)
    return
  }

  selectedTags.value.push(tag)
}
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
