import { Feed } from "feed";
import type { ParsedContentExtension } from "./parse_extension";
import queryContent from "@nuxt/content";

const BASE_URL = "https://zoe.kittycat.homes";

export async function getFeed(): Promise<Feed> {
  const feed = new Feed({
    title: "fruitbat's website",
    id: BASE_URL,
    copyright: "all rights reserved",
    description: "a feed for all my projects and ramblings 💚🦇",
    link: BASE_URL,
    author: { name: "fruitbat", link: BASE_URL },
  });
  const content: Array<ParsedContentExtension> = (
    (await $fetch("/api/_content/query")) as Array<ParsedContentExtension>
  ).sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  content.forEach((contentItem) => {
    feed.addItem({
      title: contentItem.title ?? "no title",
      date: new Date(contentItem.timestamp * 1000),
      link: (() => {
        // check if content item is not undefined or empty
        if (contentItem.links !== undefined && contentItem.links.length > 0) {
          return contentItem.links[0].url;
        }
        return BASE_URL + contentItem._path!;
      })(),
    });
  });
  return feed;
}
