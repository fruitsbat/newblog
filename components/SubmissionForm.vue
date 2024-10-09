<template>
  <form @submit.prevent="submitComment" class="flex w-full max-w-2xl flex-col gap-4">
    <input
      v-model="comment.name"
      type="text"
      placeholder="name (optional)"
      class="input border-2 border-neutral"
    />
    <input
      v-model="comment.website"
      type="text"
      placeholder="website link (optional)"
      class="input border-2 border-neutral"
    />
    <textarea
      v-model="comment.body"
      placeholder="comment"
      class="textarea textarea-lg border-2 border-neutral"
      rows="4"
      required
    ></textarea>
    <button type="submit" :class="`btn flex w-full gap-2 ${loading ? 'btn-disabled' : ''}`">
      <div v-if="loading" class="loading loading-ring"></div>
      <EnvelopeIcon v-else class="h-6 w-6" />
      <span> {{ submissionKindVerb[kind] }} </span>
    </button>
    <div
      v-if="showSuccessDisclaimer"
      class="flex items-center justify-center gap-2 rounded-lg bg-success p-4 text-success-content"
    >
      <CheckBadgeIcon class="h-6 w-6" />
      <span class="break-words"
        >your submission has been sent! it will be manually reviewed before it shows up.</span
      >
    </div>
    <div
      v-if="showFailDisclaimer"
      class="flex items-center justify-center gap-2 rounded-lg bg-error p-4 text-error-content"
    >
      <XCircleIcon class="h-6 w-6" />
      <span class="break-words">failed to send!</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios'
import { EnvelopeIcon, CheckBadgeIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import type { PropType } from 'vue'

type submissionKind = 'comment' | 'guestbook'
const submissionKindVerb: Record<submissionKind, string> = {
  comment: 'comment!',
  guestbook: 'sign!'
}
const submissionKindPath: Record<submissionKind, string> = {
  comment: 'comments',
  guestbook: 'guestbook'
}

const props = defineProps({
  slug: { type: String, required: false },
  kind: { type: Object as PropType<submissionKind>, required: true },
  reply: { type: Object as PropType<string | undefined>, required: false }
})

const comment = ref({
  name: '',
  website: '',
  body: ''
})

const showSuccessDisclaimer = ref(false)
const showFailDisclaimer = ref(false)
const loading = ref(false)

function submitComment() {
  loading.value = true
  const formData = new URLSearchParams()
  const name = comment.value.name || 'anonymous user'

  if (props.slug) {
    formData.append('options[slug]', props.slug)
  }
  if (props.reply) {
    formData.append('fields[reply]', props.reply)
  }
  formData.append('fields[name]', name)
  formData.append('fields[website]', comment.value.website)
  formData.append('fields[body]', comment.value.body)

  axios
    .post(
      `https://comments.kittycat.homes/v2/entry/fruitsbat/newblog/main/${submissionKindPath[props.kind]}`,
      formData
    )
    .then(() => {
      // reset state after submission
      comment.value.website = ''
      comment.value.name = ''
      comment.value.body = ''
      showSuccessDisclaimer.value = true
      showFailDisclaimer.value = false
    })
    .catch((_err) => {
      showFailDisclaimer.value = true
      showSuccessDisclaimer.value = false
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
