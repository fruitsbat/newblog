<template>
  <div>
    <SubmissionDisplay
      v-for="submission in content"
      :submission="submission"
      kind="guestbook"
    ></SubmissionDisplay>
    <SubmissionForm kind="guestbook" />
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
