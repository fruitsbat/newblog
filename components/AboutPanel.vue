<template>
  <div class="@container">
    <div class="grid w-full h-full gap-4 @3xl:grid-cols-3">
      <div class="min-w-full @3xl:col-span-3 bg-neutral text-neutral-content rounded-3xl p-4 prose w-full">
        <h2 class="font-euclid text-6xl text-neutral-content">about</h2>
        <p>
            hi! i'm zoe.
            welcome to my website.
        </p>
        <p>
            i'm a 23 year old univerity student from hamburg.
            you may believe it or not but there are some things i enjoy doing.
            these include but are not limited to:
            <ul>
                <li>programming</li>
                <li>making all different types of art</li>
                <li>learning new things about computers</li>
            </ul>
            ideally a combination of these.
        </p>
        <p>
            i also love <NuxtLink class="text-neutral-content" to="https://tiger.kittycat.homes">my girlfriend lotte</NuxtLink>!
        </p>
      </div>
      <ThemeSwitcher class="@md:row-span-5" />
      <ContactDetails class="text-primary-content row-span-3 @3xl:col-span-2" />
      <div
        class="flex flex-col h-full justify-center items-center @3xl:col-span-2"
      >
        <img clas="w-full h-auto" src="/image/me.webp" />
      </div>
      <div class="grid gap-4 grid-cols-2 @3xl:col-span-2">
        <a
          class="btn-neutral h-full min-h-[120px] p-4 rounded-3xl btn group"
          href="/index.xml"
        >
          <h2 class="flex gap-4 items-center">
            <span class="text-5xl font-glitch group-hover:drop-shadow-2xl"
              >feed</span
            >
          </h2>
        </a>
        <NuxtLink
          class="btn-accent h-full min-h-[120px] p-4 rounded-3xl btn group"
          to="https://ring.bicompact.space/"
        >
          <h2
            class="flex gap-4 font-syncopate items-center text-secondary-content"
          >
            <GlobeAltIcon class="w-12 h-12 group-hover:animate-spin" />
            <span class="text-lg font-syncopate">web<br />ring</span>
          </h2>
        </NuxtLink>
        <NuxtLink
          class="btn-primary h-full min-h-[120px] p-4 rounded-3xl btn group"
          to="https://github.com/fruitsbat"
        >
          <h2 class="flex gap-4 font-syncopate items-center">
            <CodeBracketIcon class="w-12 h-12 group-hover:animate-ping" />
            <span class="text-4xl font-flexi">git<br />hub</span>
          </h2>
        </NuxtLink>
        <NuxtLink
          class="btn-secondary h-full min-h-[120px] p-4 rounded-3xl btn group"
          to="https://fruitsbat.itch.io/"
        >
          <h2
            class="flex gap-4 font-syncopate items-center text-secondary-content"
          >
            <span class="text-3xl font-ka1">itch.io</span>
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactDetails from "~/components/ContactDetails.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/vue/24/solid";
</script>
