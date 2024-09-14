<template>
  <div class="bg-red-400">{{content}}</div>
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
