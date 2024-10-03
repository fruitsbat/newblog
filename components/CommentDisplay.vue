<template>
  <div class="bg-base-200 p-6 rounded-lg">
    <a class="link" v-if="comment.website" :href="comment.website"
      ><h2 class="text-xl font-black flex flex-col">
        <span>{{ comment.name }}</span>
        <small>{{ date() }}</small>
      </h2></a
    >
    <h2 class="text-xl font-black flex flex-col" v-else>
      <span>{{ comment.name }}</span>
      <small>{{ date() }}</small>
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
    hour12: false,
    timeZone: 'Europe/Berlin'
  })
}
</script>
