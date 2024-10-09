<template>
  <div>
    <SubmissionDisplay
      v-for="submission in content"
      :submission="submission"
    ></SubmissionDisplay>
    <SubmissionForm kind="guestbook" , slug="" />
    <FloatingHomeButton />
  </div>
</template>

<script setup lang="ts">
import SubmissionForm from "~/components/SubmissionForm.vue";
import { type SubmissionExtension } from "~/scripts/parse_extension";
const content = await queryContent<SubmissionExtension>("/guestbook")
  .sort({ timestamp: -1 })
  .find();
</script>
