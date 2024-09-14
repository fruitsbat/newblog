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
    </div>

    <!-- body -->
    {{ searchResults }}
    <div class="overflow-y-auto">
      <div v-for="result in queryResults">
        <LinkCard :content="result" v-if="result.links !== undefined" />
        <BlogpostCard v-else :content="result" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { type ParsedContentExtension } from '../scripts/parse_extension'

const searchTerm: Ref<string> = ref('')
// const searchResults = await searchContent(searchTerm)

const getContent = async () => {
  if ((searchTerm.value !== "")) {
    console.log(searchTerm.value)
    return []
  }
  return await queryContent<ParsedContentExtension>().find()
}
const searchResults = await getContent();

const queryResults = await getContent()
const tags = (): Set<string> => {
  const foundTags: Set<string> = new Set()
  return foundTags
}
</script>
