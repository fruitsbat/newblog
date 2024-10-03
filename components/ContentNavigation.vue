<template>
  <div class="flex h-full min-h-screen flex-col gap-4 rounded-3xl bg-base-200 @container">
    <!-- search bar -->
    <div class="flex flex-col gap-4 rounded-2xl bg-base-300 p-4">
      <label for="contentSearchBar" class="flex gap-2">
        <MagnifyingGlassIcon class="h-6" />
        <span>search</span>
      </label>
      <input
        v-model="searchTerm"
        id="contentSearchBar"
        type="search"
        class="h-full min-h-10 w-full rounded-xl bg-base-300 px-4 outline outline-2 outline-primary"
      />
      <TransitionGroup class="flex flex-wrap gap-2" name="list" tag="ul">
        <button
          v-for="tag in allTags"
          :key="tag[0]"
          @click="toggleTagSelection(tag[0])"
          class="badge btn flex-grow"
        >
          <CheckIcon class="h-6 w-6" v-if="selectedTags.includes(tag[0])" />
          {{ tag[0] }}
        </button>
      </TransitionGroup>
    </div>

    <!-- body -->
    <div class="flex flex-col gap-2 overflow-y-auto p-2">
      <div v-for="result in queryResults">
        <ContentCard :content="result" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon, CheckIcon } from '@heroicons/vue/24/solid'
import { type ParsedContentExtension } from '../scripts/parse_extension'

const searchTerm: Ref<string> = ref('')
const searchResults = await searchContent(searchTerm)
const selectedTags: Ref<Array<string>> = ref([])
const queryResults: Ref<ParsedContentExtension[]> = ref(await getContent())
const allTags = computed((): Map<string, number> => {
  let foundTags: Map<string, number> = new Map()
  queryResults.value.forEach((contentItem) => {
    contentItem.tags.forEach((tag) => {
      if (foundTags.get(tag) === undefined) {
        foundTags.set(tag, 1)
      } else {
        foundTags.set(tag, foundTags.get(tag)! + 1)
      }
    })
  })
  foundTags = new Map([...foundTags].sort((a, b) => b[1] - a[1]))
  return foundTags
})

async function getContent(): Promise<Array<ParsedContentExtension>> {
  if (searchTerm.value !== '') {
    const result = await queryContent<ParsedContentExtension>()
      .where({ tags: { $exists: true } })
      .where({
        tags: {
          $contains: selectedTags.value
        },
        _path: {
          $in: searchResults.value.map((item) => {
            let id = item.id
            if (id.includes('#')) {
              id = id.split('#')[0]
            }
            return id
          })
        }
      })
      .sort({ timestamp: -1 })
      .find()
    return getUniqueListBy(result, '_path') as any
  }
  return await queryContent<ParsedContentExtension>()
    .where({ tags: { $exists: true } })
    .where({ tags: { $contains: selectedTags.value } })
    .sort({ timestamp: -1 })
    .find()
}

function getUniqueListBy(arr: any, key: any) {
  return [...new Map(arr.map((item: { [x: string]: any }) => [item[key], item])).values()]
}

async function toggleTagSelection(tag: string) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((item) => item !== tag)
    queryResults.value = await getContent()
    return
  }
  selectedTags.value.push(tag)
  queryResults.value = await getContent()
}

watch(searchResults, async () => {
  queryResults.value = await getContent()
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
