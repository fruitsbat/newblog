<template>
  <article class="rounded-lg bg-base-200 p-6">
    <a class="link" v-if="submission.website" :href="submission.website"
      ><h2 class="flex flex-row flex-wrap items-center gap-2 text-xl font-black">
        <span>{{ submission.name }}</span>
        <span class="text-sm font-light">
          <ClientOnly>
            <small class="font-bold">wrote on {{ date() }}:</small>
          </ClientOnly>
        </span>
      </h2></a
    >
    <h2 class="flex flex-row flex-wrap items-center gap-2 text-xl font-black" v-else>
      <span>{{ submission.name }}</span>
      <span class="text-sm font-light">
        <ClientOnly>
          <small class="font-bold">wrote on {{ date() }}:</small>
        </ClientOnly>
      </span>
    </h2>
    <ContentRenderer :value="submission"></ContentRenderer>
    <details>
      <summary class="btn">reply</summary>
      <SubmissionForm :reply="submission._id" :kind="kind" />
    </details>
    <div class="border-l-2">
      <SubmissionDisplay v-for="reply in replies" :submission="reply" :kind="kind" :slug="slug" />
    </div>
  </article>
</template>
<script setup lang="ts">
import { type SubmissionExtension } from '~/scripts/parse_extension'

const props = defineProps({
  submission: {
    type: Object as PropType<SubmissionExtension>,
    required: true
  },
  kind: { type: Object as PropType<'comment' | 'guestbook'>, required: true },
  slug: { type: String, required: false }
})

const date = (): string => {
  return new Date(props.submission.timestamp * 1000).toLocaleString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  })
}

const replies = await queryContent<SubmissionExtension>()
  .where({ reply: props.submission._id })
  .find()
</script>
