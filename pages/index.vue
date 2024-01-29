<template>
    <div>
        <div class="grid xl:grid-cols-5 gap-4 p-8">
            <AboutPanel class="xl:col-span-2" />
            <ContentNavigation class="xl:col-span-3" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentNavigation from '~/components/ContentNavigation.vue';
useHead({
    title: "zoe website"
})
</script>