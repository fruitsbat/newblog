<template>
    <div class="@container">
        <div class="grid w-full h-full gap-4 @lg:grid-cols-2">
            <ThemeSwitcher class="@md:row-span-2" />
            <ContactDetails class="text-primary-content" />
            <NuxtLink class="btn-secondary h-full min-h-[120px] p-4 rounded-3xl btn group" to="https://ring.bicompact.space/">
                <h2 class="flex gap-4 font-syncopate items-center text-secondary-content">
                    <GlobeAltIcon class="w-12 h-12 group-hover:animate-spin" />
                    <span class="text-lg font-syncopate">web<br>ring</span>
                </h2>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactDetails from '~/components/ContactDetails.vue';
import ThemeSwitcher from '~/components/ThemeSwitcher.vue';
import { GlobeAltIcon } from '@heroicons/vue/24/solid';
</script>