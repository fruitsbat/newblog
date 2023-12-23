<template>
  <div class="p-4 grid gap-4 bg-primary rounded-3xl">
    <h2 class="font-rammetto text-5xl flex gap-4 items-center">
      <EnvelopeOpenIcon class="h-24 w-24" /><span>con<wbr />tact<br />me</span>
    </h2>
    <p>
      if you want you can talk to me,<wbr /> just send a message<wbr /> on
      <NuxtLink
        class="link"
        to="https://matrix.to/#/@bat:matrix.kittycat.homes"
      >
        matrix
      </NuxtLink>
      or
      <NuxtLink
        class="link"
        to="https://discordapp.com/users/200666655016091648"
        >discord</NuxtLink
      >.
      emailing <a class="link" href="mailto:zoe@kittycat.homes">zoe@kittycat.homes</a> works too.
    </p>
    <p>
      i can also be found on other places on the internet such as
      <NuxtLink
        class="link"
        to="https://github.com/fruitsbat"
        >github</NuxtLink
      >
      and
      <NuxtLink class="link" to="https://fruitsbat.itch.io">itch.io</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeOpenIcon } from "@heroicons/vue/24/solid";
</script>
