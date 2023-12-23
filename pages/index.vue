<template>
    <div>
        <div class="grid lg:grid-cols-5 gap-4 p-8">
            <ContentNavigation class="lg:col-span-3" />
            <AboutPanel class="lg:col-span-2" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentNavigation from '~/components/ContentNavigation.vue';
useHead({
    title: "zoe website"
})
</script>