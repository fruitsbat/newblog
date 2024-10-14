<template>
  <div class="@container">
    <div class="grid h-full w-full gap-4 @3xl:grid-cols-5">
      <div class="grid gap-4 @3xl:col-span-2">
        <div class="prose w-full min-w-full rounded-3xl bg-neutral p-8 text-neutral-content">
          <h2 class="font-euclid text-5xl text-neutral-content">about</h2>
          <p>hi! i'm zoe. welcome to my website.</p>
          <p>
            i'm a 23 year old university student from hamburg. you may believe it or not but there
            are some things i enjoy doing. these include but are not limited to:
          </p>
          <ul>
            <li>programming</li>
            <li>making all different types of art</li>
            <li>learning new things about computers</li>
          </ul>
          <p>ideally a combination of these.</p>
          <p>
            i also love
            <NuxtLink class="text-neutral-content" to="https://tiger.kittycat.homes"
              >my girlfriend lotte</NuxtLink
            >!
          </p>
          <p>Here's a button if you like this website and want to link to it!</p>
          <div class="flex flex-row flex-wrap gap-4">
            <img
              style="image-rendering: pixelated"
              src="/button.gif"
              class="min-h-[62px] w-full min-w-[176px] hover:scale-150"
            />
            <img
              style="image-rendering: pixelated"
              src="/button.png"
              class="min-h-[62px] w-full min-w-[176px] hover:scale-150"
            />
          </div>
        </div>
        <ClientOnly>
          <LastFM />
        </ClientOnly>
        <ThemeSwitcher class="" />
        <SocialLinks />
      </div>
      <div class="grid @3xl:col-span-3">
        <div>
          <BlogRoll />
          <ContactDetails class="text-primary-content @3xl:col-span-2" />
        </div>
        <div class="row-span-3 flex h-full flex-col items-center justify-center @3xl:col-span-2">
          <img
            title="physical form!"
            class="h-auto w-full"
            src="/image/me.webp"
            alt="a pixelart image of a person with messy brown hair wearing a black dress. there's an arrow pointing at it that says 'me'"
          />
        </div>
        <div class="grid grid-cols-2 gap-4 @3xl:col-span-2">
          <a class="group btn btn-neutral h-full min-h-[120px] rounded-3xl p-4" href="/index.xml">
            <h2 class="flex items-center gap-4">
              <span class="font-glitch text-5xl">feed</span>
            </h2>
          </a>
          <div class="grid grid-cols-2 gap-4">
            <NuxtLink
              class="btn col-span-2 h-full rounded-3xl font-syncopate text-4xl"
              to="https://webring.kittycat.homes"
            >
              <GlobeAltIcon class="h-24 w-24" />
              <span>web<br />ring</span>
            </NuxtLink>
            <NuxtLink
              class="btn flex h-auto flex-col flex-nowrap rounded-3xl p-4 font-syncopate"
              to="https://webring.kittycat.homes/previous/zoe"
            >
              <ArrowLeftIcon class="h-6 w-6" />
              <span>prev</span>
            </NuxtLink>
            <NuxtLink
              class="btn flex h-auto flex-col flex-nowrap rounded-3xl p-4 font-syncopate"
              to="https://webring.kittycat.homes/next/zoe"
            >
              <ArrowRightIcon class="h-6 w-6" />
              <span>next</span>
            </NuxtLink>
          </div>
          <NuxtLink
            class="group btn btn-primary h-full min-h-[120px] rounded-3xl p-4"
            to="https://github.com/fruitsbat"
          >
            <h2 class="flex items-center gap-4 font-syncopate">
              <CodeBracketIcon class="h-12 w-12 group-hover:animate-ping" />
              <span class="font-flexi text-4xl">git<br />hub</span>
            </h2>
          </NuxtLink>
          <NuxtLink
            class="group btn btn-secondary row-span-2 h-full min-h-[120px] rounded-3xl p-4"
            to="https://fruitsbat.itch.io/"
          >
            <h2 class="flex items-center gap-4 font-syncopate text-secondary-content">
              <span class="font-ka1 text-3xl">itch.io</span>
            </h2>
          </NuxtLink>
          <NuxtLink
            class="group btn btn-accent col-span-1 h-full min-h-[120px] rounded-3xl p-4"
            to="/music"
          >
            <h2 class="flex items-center gap-4 text-secondary-content">
              <span class="font-glockenspiel text-3xl">music</span>
            </h2>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactDetails from '~/components/ContactDetails.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/solid'
</script>
