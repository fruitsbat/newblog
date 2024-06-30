<template>
  <div class="p-16 flex flex-col gap-4">
    <HeadingWithHomeButton
      class="font-rammetto text-4xl"
      title="music links"
    ></HeadingWithHomeButton>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 @container">
      <div>
        <h2 class="font-rammetto text-2xl">popular</h2>
        <div class="h-full">
          <div class="grid h-full gap-6 grid-cols-1 @4xl:grid-cols-3 p-4">
            <NuxtLink
              v-for="item in popularLinks"
              :to="item.link"
              class="btn m-0 border-none p-0 btn-primary text-primary-content w-full h-full rounded-2xl flex flex-col justify-between items-stretch join join-vertical shadow-xl"
            >
              <img
                :src="item.image"
                :alt="item.imageDescription"
                class="join-item w-full h-auto"
              />
              <h2 class="flex items-center justify-center p-4 join-item">
                <span class="text-2xl font-bold">{{ item.name }}</span>
              </h2>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div>
        <h2 class="font-rammetto text-2xl">all</h2>
        <div class="flex flex-wrap justify-stretch items-end gap-4 p-4">
          <NuxtLink
            class="btn flex-grow h-full"
            v-for="item in links"
            :to="item.link"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type link = { name: string; link: string };
type popularLink = { image: string; imageDescription: string } & link;
const popularLinks: popularLink[] = [
  {
    name: "Spotify",
    link: "https://open.spotify.com/artist/0ml3dMhr5kGEgny70nAqH9",
    image: "/image/spotify.webp",
    imageDescription: "the spotify logo",
  },
  {
    name: "Bandcamp",
    link: "https://zoebat.bandcamp.com/",
    image: "/image/bandcamp.webp",
    imageDescription: "the bandcamp logo",
  },
  {
    name: "Apple Music",
    link: "https://music.apple.com/artist/zoe-bat/1751787563",
    image: "/image/applemusic.svg",
    imageDescription: "the apple music logo",
  },
];
const links: link[] = [
  { name: "Faircamp", link: "https://music.kittycat.homes/zoe-bat/" },
  {
    name: "Bugs!",
    link: "https://music.bugs.co.kr/artist/13758855",
  } as link,
  {
    name: "Napster",
    link: "https://web.napster.com/artist/art.7131718214063563",
  } as link,
  {
    name: "amazon music",
    link: "https://www.amazon.de/music/player/artists/B0D6WCB5T4/zoe-bat",
  } as link,
  {
    name: "qobuz",
    link: "https://www.qobuz.com/us-en/interpreter/zoe-bat/22764668",
  } as link,
  {
    name: "FLO",
    link: "https://www.music-flo.com/detail/artist/409802812/track",
  } as link,
  {
    name: "anghami",
    link: "https://play.anghami.com/artist/21278141",
  } as link,
  {
    name: "JioSaavn",
    link: "https://www.jiosaavn.com/label/zoe-bat-albums/CcDccQtmyYo_",
  } as link,
  {
    name: "Boomplay",
    link: "https://www.boomplay.com/artists/92245582",
  } as link,
  {
    name: "LINE MUSIC",
    link: "https://music.line.me/webapp/artist/mi0000000022ecddef",
  } as link,
  {
    name: "youSee Musik",
    link: "https://musik.yousee.dk/kunstner/79328911",
  } as link,
  {
    name: "Telmore Musik",
    link: "https://musik.telmore.dk/kunstner/79328911",
  } as link,
]
  .concat(popularLinks as link[])
  .sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (b.name.toLowerCase() > a.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });
</script>
