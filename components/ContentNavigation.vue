<template>
    <div class="@container flex flex-col gap-4">
        <div v-if="previousPageExists() || nextPageExists()"
            class="flex join justify-between items-center bg-base-200 rounded-3xl">
            <button v-if="previousPageExists()" class="btn h-full rounded-3xl join-item" @click="previousPage()">
                <ChevronLeftIcon class="w-6 h-6" />
                <span>previous</span>
            </button>
            <div v-else></div>
            <span class="join-item">{{ page + 1 }}</span>
            <button class="btn h-full join-item rounded-3xl" v-if="nextPageExists()" @click="nextPage()">
                <span>next</span>
                <ChevronRightIcon class="w-6 h-6" />
            </button>
            <div v-else></div>
        </div>
        <ContentList :shown-items="shownItems" />
    </div>
</template>

<script setup lang="ts">
import { contentList } from "~/content/list";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const page = ref(0);
const itemsPerPage = 24;
const startIndex = computed(() => {
    return page.value * itemsPerPage;
});

function previousPageExists(): boolean {
    return page.value > 0;
}

function previousPage() {
    if (previousPageExists()) {
        page.value -= 1;
    }
}

function nextPageExists(): boolean {
    return (startIndex.value + itemsPerPage) <= contentList.length - 1;
}

function nextPage() {
    if (nextPageExists()) {
        page.value += 1
    }
}

const shownItems = computed(() => {
    return contentList.slice(startIndex.value, startIndex.value + itemsPerPage);
});
</script>

<style></style>
