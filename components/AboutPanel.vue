<template>
  <div class="@container">
    <div class="grid w-full h-full gap-4 @3xl:grid-cols-5">
      <div class="grid gap-4 @3xl:col-span-2">
        <div class="min-w-full bg-neutral text-neutral-content rounded-3xl p-8 prose w-full">
        <h2 class="font-euclid text-5xl text-neutral-content">about</h2>
        <p>
            hi! i'm zoe.
            welcome to my website.
        </p>
        <p>
            i'm a 23 year old university student from hamburg.
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
      <ThemeSwitcher class="" />
      </div>
      <div class="@3xl:col-span-3 grid">
        <ContactDetails class="text-primary-content @3xl:col-span-2" />
      <div
        class="flex flex-col h-full row-span-3 justify-center items-center @3xl:col-span-2"
      >
        <img class="w-full h-auto" src="/image/me.webp" alt="a pixelart image of a person with messy brown hair wearing a black dress. there's an arrow pointing at it that says 'me'"/>
      </div>
      <div class="grid gap-4 grid-cols-2 @3xl:col-span-2">
        <a
          class="btn-neutral h-full min-h-[120px] p-4 rounded-3xl btn group"
          href="/index.xml"
        >
          <h2 class="flex gap-4 items-center">
            <span class="text-5xl font-glitch"
              >feed</span
            >
          </h2>
        </a>
        <div class="grid grid-cols-2 gap-4">
          <NuxtLink class="col-span-2 btn text-4xl font-syncopate h-48 rounded-3xl" to="https://webring.kittycat.homes">
            <GlobeAltIcon class="w-24 h-24" />
            <span>web<br />ring</span>
          </NuxtLink>
          <NuxtLink class="font-syncopate btn flex flex-col p-4 flex-nowrap h-auto rounded-3xl" to="https://webring.kittycat.homes/previous/zoe">
            <ArrowLeftIcon class="w-6 h-6"/>
            <span>previous</span>
          </NuxtLink>
          <NuxtLink class="font-syncopate btn flex flex-col p-4 flex-nowrap h-auto rounded-3xl" to="https://webring.kittycat.homes/next/zoe">
            <ArrowRightIcon class="w-6 h-6"/>
            <span>next</span>
          </NuxtLink>
        </div>
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
  </div>
</template>

<script setup lang="ts">
import ContactDetails from "~/components/ContactDetails.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";
import { GlobeAltIcon, CodeBracketIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
</script>
