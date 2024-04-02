import { type Content, Page, Music, Sticker } from "./classes";
export const contentList: Array<Content> = [
  new Sticker({
    created: new Date(2024, 4, 2),
    image: {
      description: "an image of a pink flower",
      link: "/image/flower.webp",
    },
    link: "/imager/flower.webp",
    title: "flower",
    enclosure: {
      url: "https://zoe.kittycat.homes/image/strawberry.webp",
      type: "image/webp",
      title: "flower",
    },
  }),
  new Sticker({
    created: new Date(2024, 1, 25),
    image: {
      description:
        "low poly image of a strawberry the leaves have some funky patterns on them",
      link: "/image/strawberry.webp",
    },
    link: "/image/strawberry.webp",
    title: "low poly strawberry",
    enclosure: {
      url: "https://zoe.kittycat.homes/image/strawberry.webp",
      type: "image/webp",
      title: "low poly strawberry",
    },
  }),
  new Music({
    audioFile: "/audio/beepy.mp3",
    title: "beepy",
    created: new Date(2024, 1, 26),
    link: "/audio/beepy.mp3",
    enclosure: {
      url: "https://zoe.kittycat.homes/audio/beepy.mp3",
      type: "audio/mp3",
    },
  }),
  new Page({
    title: "starchart",
    summary: "an art project that lets you generate planets for everyone",
    image: {
      description: "a space image",
      link: "/image/starchart.webp",
    },
    created: new Date(2023, 8, 26),
    link: "https://starchart.kittycat.homes",
  }),
  new Page({
    created: new Date(2023, 12, 11),
    link: "/rsa",
    summary: "shows how rsa works",
    title: "rsa calculator",
    image: {
      description: "a stock photo of a lock",
      link: "/image/lock.webp",
    },
  }),
  new Sticker({
    created: new Date(2023, 12, 23),
    image: {
      description: "a pixelart image of an orange",
      link: "/image/lemon.webp",
    },
    link: "/image/lemon.webp",
    title: "pixel orange",
    enclosure: {
      url: "https://zoe.kittycat.homes/image/lemon.webp",
      type: "image/webp",
      title: "pixel orange",
    },
  }),
  new Page({
    created: new Date(2023, 8, 10),
    image: {
      link: "/image/pico8Odroid.webp",
      description: "pico 8 running on the odroid go ultra",
    },
    link: "/pico8OnOdroid",
    summary: "a guide on how to run pico8 games on the odroid go ultra",
    title: "pico 8 on odroid go ultra",
  }),
  new Page({
    title: "mystery creature",
    created: new Date(2023, 2, 4),
    image: {
      description: "a pixelart image of a cat",
      link: "/image/mystery_creature.webp",
    },
    summary:
      "a game jam game for the gameboy in which you discover an alien creature",
    link: "https://fruitsbat.itch.io/mystery-creature",
  }),
  new Music({
    audioFile: "/audio/z-type-ultra_howells-theme.mp3.mp3",
    title: "z-type-ultra_howells-theme.mp3",
    created: new Date(2023, 12, 8),
    link: "/audio/z-type-ultra_howells-theme.mp3.mp3",
    enclosure: {
      url: "https://zoe.kittycat.homes/audio/z-type-ultra_howells-theme.mp3.mp3",
      duration: 124,
      type: "audio/mp3",
    },
  }),
  new Page({
    title: "kaokao",
    created: new Date(2023, 4, 11),
    image: {
      description: "an emoji being picked using kaokao",
      link: "/image/kaokao.webp",
    },
    summary: "an emoji picker written in rust with support for kaomoji",
    link: "https://github.com/fruitsbat/kaokao",
  }),
  new Page({
    title: "untitled plant game",
    created: new Date(2021, 12, 9),
    summary: "a relaxing virtual pet game jam game i made with my girlfriend",
    image: {
      link: "/image/plantgame.webp",
      description: "a pixelart image of a potted plant",
    },
    link: "https://bathearttiger.itch.io/untitled-plant-game",
  }),
  new Page({
    title: "supercolor",
    image: {
      link: "/image/supercolor.webp",
      description: "an image of a colorful command line",
    },
    link: "https://github.com/fruitsbat/supercolor",
    created: new Date(2023, 3, 5),
    summary: "a toy for displaying colorful ascii art in your terminal",
  }),
  new Page({
    title: "trainyard trouble",
    summary:
      "a game jam puzzle game where you manage cargo for trains, i made this with my girlfriend",
    created: new Date(2022, 3, 26),
    image: {
      link: "/image/trainyard.webp",
      description: "a picture of a train car",
    },
    link: "https://bathearttiger.itch.io/trainyard-trouble",
  }),
  new Page({
    title: "gigo",
    created: new Date(2023, 5, 25),
    image: {
      description: "a stock image that looks very cyber (trademark)",
      link: "/image/ai.webp",
    },
    link: "https://fruitsbat.github.io/gigo/",
    summary:
      "an interactive article about metamorphic testing i wrote for university",
  }),
  new Page({
    title: "rssmatrix",
    created: new Date(2022, 9, 15),
    image: {
      link: "/image/rssmatrix.webp",
      description: "text scrolling by on an led screen",
    },
    link: "https://git.kittycat.homes/zoe/rssmatrix",
    summary: "python script for viewing miniflux rss feeds on an led screen",
  }),
  new Page({
    created: new Date(2022, 1, 24),
    image: { description: "a picture of some food", link: "/image/food.webp" },
    link: "https://wisdom.kittycat.homes",
    summary:
      "a markov chain website trained on a cooking forum and jonathan frakes",
    title: "wisdom",
  }),
  new Page({
    title: "space kitty",
    image: {
      link: "/image/space_kitty.webp",
      description: "an image of a cat in front of a space background",
    },
    summary: "small art project, one of the first websites i made",
    created: new Date(2021, 8, 21),
    link: "https://tilde.team/~zoe/",
  }),
  new Page({
    title: "loris",
    created: new Date(2022, 10, 2),
    image: {
      link: "/image/loris.webp",
      description: "a screenshot of my fedi profile in loris",
    },
    summary:
      "a proof of concept mastodon client coded in flutter, i would recommend everyone use phanpy instead",
    link: "https://git.kittycat.homes/zoe/loris",
  }),
];

export function newestDate(): Date {
  let newest = new Date(1970, 1, 1);
  contentList.forEach((item) => {
    if (item.updated > newest) {
      newest = item.updated;
    }
  });
  return newest;
}

export function contentSortedByDate(): Array<Content> {
  return contentList.sort((a, b) => {
    return b.updated.getTime() - a.updated.getTime();
  });
}
