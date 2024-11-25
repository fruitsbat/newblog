<template>
  <ul class="flex flex-wrap gap-2 p-4">
    <li v-for="button in buttons">
      <a :href="button.linksTo" class="">
        <img
          :src="`/image/button/${button.imgUrl}`"
          loading="lazy"
          style="image-rendering: pixelated"
          class="h-[62px] w-[176px] hover:scale-150"
        />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const buttons: Array<{ linksTo: string; imgUrl: string }> = [
  { linksTo: 'https://meltknuckles.net/links', imgUrl: 'meltknuckles.gif' },
  { linksTo: 'https://erysdren.me', imgUrl: 'erysdren.png' },
  { linksTo: 'https://le.alphamethyl.barr0w.net/~elysia/', imgUrl: "elysia.png"}
]
</script>
