<template>
  <ul class="flex w-full flex-wrap gap-2 p-4">
    <li v-for="button in buttons" class="flex-grow">
      <a :href="button.linksTo" class="h-auto w-full">
        <img
          :src="`/image/button/${button.imgUrl}`"
          loading="lazy"
          style="image-rendering: pixelated"
          class="min-h-[32px] min-w-[176px] h-full w-full hover:scale-150"
        />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const buttons: Array<{ linksTo: string; imgUrl: string }> = [
  { linksTo: 'https://tiger.kittycat.homes', imgUrl: 'tiger.gif' },
  { linksTo: 'https://www.5snb.club/', imgUrl: '522.png' },
  { linksTo: 'https://erysdren.me', imgUrl: 'erysdren.png' },
  { linksTo: 'https://meltknuckles.net/links', imgUrl: 'meltknuckles.gif' },
  { linksTo: 'https://le.alphamethyl.barr0w.net/~elysia/', imgUrl: 'elysia.png' }
]
</script>
