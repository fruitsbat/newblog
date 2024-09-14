<template>
  <div class="bg-base-300 rounded-3xl">
    <ContentRenderer class="prose" :value="content" :excerpt="true" />
  </div>
</template>

<script setup lang="ts">
import { type ParsedContentExtension } from '../scripts/parse_extension'
import { type PropType } from 'vue'

defineProps({
  content: {
    type: Object as PropType<ParsedContentExtension>,
    required: true
  }
})
</script>
