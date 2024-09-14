<template>
  <div class="flex h-screen flex-col gap-4 rounded-3xl bg-base-200 @container">
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
      <div class="flex gap-2">
        <div v-for="tag in allTags">
          <button @click="toggleTagSelection(tag[0])" class="badge btn">
            <CheckBadgeIcon class="h-6 w-6" v-if="selectedTags.includes(tag[0])"></CheckBadgeIcon>
            {{ tag[0] }}
          </button>
        </div>
      </div>
    </div>

    <!-- body -->
    {{ searchResults }}
    <div class="flex flex-col gap-2 overflow-y-auto p-2">
      <div v-for="result in queryResults">
        <LinkCard :content="result" v-if="result.links !== undefined" />
        <BlogpostCard v-else :content="result" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'
import { type ParsedContentExtension } from '../scripts/parse_extension'

const searchTerm: Ref<string> = ref('')
const searchResults = await searchContent(searchTerm)
const selectedTags: Ref<Array<string>> = ref([])

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

const getContent = async (): Promise<ParsedContentExtension[]> => {
  if (searchTerm.value !== '') {
    const result = await queryContent<ParsedContentExtension>()
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
      .find()
    return getUniqueListBy(result, '_path') as any
  }
  return await queryContent<ParsedContentExtension>()
    .where({ tags: { $contains: selectedTags.value } })
    .find()
}

function getUniqueListBy(arr: any, key: any) {
  return [...new Map(arr.map((item: { [x: string]: any }) => [item[key], item])).values()]
}

const queryResults: Ref<ParsedContentExtension[]> = ref(await getContent())

watch(searchTerm, async () => {
  queryResults.value = await getContent()
})
watch(searchResults, async () => {
  queryResults.value = await getContent()
})

const toggleTagSelection = async (tag: string) => {
  console.log(tag)
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((item) => item !== tag)
    queryResults.value = await getContent()
    return
  }
  queryResults.value = await getContent()
  selectedTags.value.push(tag)
}

watch(allTags, async () => {
  selectedTags.value.filter((item) => {
    return !(allTags.value.get(item) === undefined)
  })
  queryResults.value = await getContent()
})
</script>
