<template>
  <form v-if="showCommentForm" @submit.prevent="submitComment" class="flex flex-col gap-2">
    <input
      v-model="comment.name"
      type="text"
      placeholder="name (optional)"
      class="rounded-xl border-2 border-accent bg-base-100 p-2"
    />
    <input
      v-model="comment.website"
      type="text"
      placeholder="website link (optional)"
      class="rounded-xl border-2 border-accent bg-base-100 p-2"
    />
    <textarea
      v-model="comment.body"
      placeholder="comment"
      class="rounded-xl border-2 border-accent bg-base-100 p-2"
      rows="3"
      required
    ></textarea>
    <button
      type="submit"
      class="font-display flex w-fit items-center gap-2 rounded-xl bg-accent px-2 py-1 text-lg text-base-100 hover:brightness-90"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
          clip-rule="evenodd"
        />
      </svg>
      comment!
    </button>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios'

const props = defineProps({
  slug: { type: String, required: true }
})

const comment = ref({
  name: '',
  website: '',
  body: ''
})

const showCommentForm = ref(false)

function toggleCommentForm() {
  showCommentForm.value = !showCommentForm.value
}

function submitComment() {
  const formData = new URLSearchParams()
  const name = comment.value.name || 'anonymous user'

  formData.append('options[slug]', props.slug)

  formData.append('fields[name]', name)
  formData.append('fields[website]', comment.value.website)
  formData.append('fields[body]', comment.value.body)

  axios
    .post(
      'https://comments.kittycat.homes/v2/entry/fruitsbat/newblog/main/comments',
      formData
    )
    .then((response) => {
      console.log('Comment submitted successfully:', response)
      // Optionally reset the comment state after submission
      comment.value.website = ''
      comment.value.name = ''
      comment.value.body = ''
    })
    .catch((err) => {
      console.error('Error submitting comment:', err)
    })
}
</script>
