<template>
    <div>
        <AboutMe />
        <div class="grid lg:grid-cols-3 gap-8 p-8">
            <AboutPanel />
            <ContentNavigation class="lg:col-span-2" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentNavigation from '~/components/ContentNavigation.vue';
useHead({
    title: "zoe website"
})
</script>