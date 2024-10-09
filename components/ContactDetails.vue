<template>
  <div class="p-4 grid gap-4 bg-primary rounded-3xl">
    <h2 class="font-rammetto text-5xl flex gap-4 items-center">
      <EnvelopeOpenIcon class="h-24 w-24" /><span>con<wbr />tact</span>
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
      or you can sign <NuxtLink class="link" to="/guestbook">my guestbook</NuxtLink>!
    </p>

  </div>
</template>

<script setup lang="ts">
import { EnvelopeOpenIcon } from "@heroicons/vue/24/solid";
</script>
