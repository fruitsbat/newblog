<template>
  <NuxtLink
    @click="loadingHome = true"
    to="/"
    class="btn toast btn-neutral toast-end m-6 flex flex-row items-center justify-center rounded-3xl p-4 shadow-2xl"
  >
    <div v-if="loadingHome" class="loading loading-ring h-4 w-4"></div>
    <HomeIcon v-else class="h-4 w-4" />
    <span>Home</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid';
const route = useRoute()
const loadingHome = computed(() => {
  return route.path === '' || route.path === '/'
})
</script>
