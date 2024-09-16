<template>
  <div class="bg-slate-800">{{ content }}</div>
</template>

<script setup lang="ts">
import { type ParsedContentExtension } from '../scripts/parse_extension'
import { type PropType } from 'vue'

const props = defineProps({
  content: {
    type: Object as PropType<ParsedContentExtension>,
    required: true
  }
})

// we know links will exist since this is the link card
const links = props.content.links!
</script>
