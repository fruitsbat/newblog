<template>
  <div class="prose">
    <HeadingWithHomeButton title="pico 8 on odroid go ultra" />
    <h2>buy pico 8</h2>
    <p>
      go to <a href="https://lexaloffle.itch.io/pico-8">itch.io</a> and download
      the raspi version of pico 8. pico 8 was in the blm bundle. everyone has
      that one so you probably own it already too.
    </p>
    <h2>put it in your roms folder</h2>
    <p>
      now extract the contents of the folder called pico-8 into the pico-8 roms
      folder on your sd card. not the bios folder... i struggled with this...
    </p>
    <h2>it works now, congratulations</h2>
    <p>play the games. you love the games.</p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "pico 8 on odroid go ultra",
});

definePageMeta({
  layout: "blogpost",
});
</script>
