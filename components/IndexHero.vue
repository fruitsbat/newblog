<template>
  <div class="grid h-2/3 w-full grid-cols-1 justify-center p-4 sm:grid-cols-3">
    <div class="col-span-1 flex flex-col justify-center" v-motion-slide-visible-once-left>
      <div class="mask aspect-square h-full bg-neutral bg-gradient-to-tr from-primary to-secondary">
        <div class="h-full w-full bg-neutral bg-opacity-90"></div>
      </div>
    </div>
    <div class="flex h-full flex-col items-center gap-6 justify-center sm:col-span-2">
      <h1 class="text-4xl font-black" v-motion-slide-visible-once-top>hi! i'm zoe!</h1>
      <p class="text-center w-full" v-motion-slide-visible-once-right>
        i'm a software engineering student from hamburg and this is my blog!
        <br />
        here you'll find games, music and whatever else i'm obsessed with today
      </p>
      <ThemeSwitcher />
    </div>
  </div>
</template>



<style scoped lang="css">
.mask {
  mask-repeat: no-repeat;
  mask-image: url(/image/texticon.webp);
  mask-mode: alpha;
}
</style>
