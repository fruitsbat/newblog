import { type Content, Page, Music } from "./classes";
export const contentList: Array<Content> = [
  new Page({
    created: new Date(11, 12, 2023),
    link: "/rsa",
    summary: "shows how rsa works",
    title: "rsa calculator",
    image: {
      description: "a stock photo of a lock",
      link: "/image/lock.webp",
    },
  }),
  new Music({
    audioFile: "/audio/z-type-ultra_howells-theme.mp3.mp3",
    title: "z-type-ultra_howells-theme.mp3",
    created: new Date(12, 8, 2023),
    link: "/audio/z-type-ultra_howells-theme.mp3.mp3",
    enclosure: {
      url: "https://zoe.kittycat.homes/audio/z-type-ultra_howells-theme.mp3.mp3",
      duration: 124,
      type: "audio/mp3",
    },
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
