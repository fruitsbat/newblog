<template>
    <button class="btn h-[120px] p-0 border-0 btn-block" :data-theme="themeName" @click="$state.active = themeName">
        <div class="w-full h-full flex">
            <div class="flex-grow flex-col flex items-end justify-center p-4 gap-2">
                <div class="flex flex-row gap-2 items-center justify-end">
                    <Transition name="bounce">
                        <div v-if="$state.active == themeName" class="flex gap-2 label items-center text-sm rounded-xl">
                            <CheckCircleIcon class="h-6 w-6" />
                            <span>active</span>
                        </div>
                    </Transition>
                    <span class="text-xl pb-4 pt-4">
                        {{ themeName }}
                    </span>
                </div>
                <div class="flex gap-2">
                    <div class="w-4 h-4 rounded-full bg-primary"></div>
                    <div class="w-4 h-4 rounded-full bg-secondary"></div>
                    <div class="w-4 h-4 rounded-full bg-accent"></div>
                </div>
            </div>
        </div>
    </button>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
defineProps({
    themeName: {
        type: String,
        required: true,
    }
})

const { $state } = useThemeStore()
</script>

<style>
.bounce-enter-active {
    animation: bounce-in 0.24s;
}

.bounce-leave-active {
    animation: bounce-out 0.12s;
}

@keyframes bounce-in {
    0% {
        transform: rotate(-45deg);
    }

    50% {
        transform: rotate(24deg);
    }

    70% {
        transform: rotate(-10deg);
    }

    75% {
        transform: rotate(9deg);
    }

    80% {
        transform: rotate(-4deg);
    }

    85% {
        transform: rotate(3deg);
    }

    90% {
        transform: rotate(-2deg);
    }

    95% {
        transform: rotate(1deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}
</style>