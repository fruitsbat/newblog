<template>
    <div class="flex flex-col gap-4 justify-between join-vertical bg-accent rounded-3xl p-4">
        <h2 class="join-item flex gap-4 items-center text-accent-content">
            <SparklesIcon class="w-12 h-12" />
            <span class="font-macondo text-6xl">theme</span>
        </h2>
        <ThemeDisplay v-for="theme in pickableThemes" :theme-name="theme" />
        <button class="btn" @click="$state.active = ''">
            <TrashIcon class="w-6 h-6" />
            <span>reset</span>
        </button>
    </div>
</template> 

<script setup lang="ts">
import { useThemeStore } from "../stores/theme"
import ThemeDisplay from "./ThemeDisplay.vue";
import { TrashIcon, SparklesIcon } from "@heroicons/vue/24/solid"
const pickableThemes: Array<string> = [
    "sleepy", "post-it", "magic", "minty", "oled", "funky"
]

const { $state } = useThemeStore()
</script>