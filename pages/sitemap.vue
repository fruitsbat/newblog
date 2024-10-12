<template>
  <h1>sitemap</h1>
  <h2>blog</h2>
  <ul>
    <li v-for="item in posts">
      <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type ParsedContentExtension } from "~/scripts/parse_extension";

const posts = await queryContent<ParsedContentExtension>(`/blog`).find();
</script>
