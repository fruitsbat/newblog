<template>
  <div class="flex flex-col gap-8 w-full items-center">
    <h1 class="font-black text-7xl text-center p-name">guestbook</h1>
    <SubmissionForm kind="guestbook" />

    <div class="max-w-2xl w-full flex flex-col gap-4">
      <SubmissionDisplay
        v-for="submission in content"
        :submission="submission"
        kind="guestbook"
      ></SubmissionDisplay>
    </div>
    <FloatingHomeButton />
  </div>
</template>

<script setup lang="ts">
import SubmissionForm from "~/components/SubmissionForm.vue";
import { type SubmissionExtension } from "~/scripts/parse_extension";
const content = await queryContent<SubmissionExtension>("/guestbook")
  .where({ reply: { $exists: false } })
  .sort({ timestamp: -1 })
  .find();
</script>
