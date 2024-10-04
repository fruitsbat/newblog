<template>
  <div class="rounded-lg bg-base-200 p-6">
    <a class="link" v-if="comment.website" :href="comment.website"
      ><h2 class="flex flex-row items-center gap-2 flex-wrap text-xl font-black">
        <span>{{ comment.name }}</span>
        <span class="text-sm font-light">
        <ClientOnly>
          <small class="font-bold">wrote on {{ date() }}:</small>
        </ClientOnly>
      </span>
      </h2></a
    >
    <h2 class="flex flex-row items-center gap-2 flex-wrap text-xl font-black" v-else>
      <span>{{ comment.name }}</span>
      <span class="text-sm font-light">
        <ClientOnly>
          <small class="font-bold">wrote on {{ date() }}:</small>
        </ClientOnly>
      </span>
    </h2>
    <ContentRenderer :value="comment"></ContentRenderer>
  </div>
</template>
<script setup lang="ts">
import { type CommentExtension } from '~/scripts/parse_extension'

const props = defineProps({
  comment: { type: Object as PropType<CommentExtension>, required: true }
})

const date = (): string => {
  return new Date(props.comment.timestamp * 1000).toLocaleString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  })
}
</script>
