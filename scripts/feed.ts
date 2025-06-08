import { Feed } from "feed";
import Showdown from "showdown";
import { readFile } from "fs/promises";
import { join } from "path";
import type { BlogCollectionItem, LinksCollectionItem } from "@nuxt/content";
import type { H3Event, EventHandlerRequest } from "h3";

const BASE_URL = "https://zoe.kittycat.homes";

const isLinksCollection = (
  item: BlogCollectionItem | LinksCollectionItem
): item is LinksCollectionItem => {
  return "links" in item && item.links !== undefined;
};

async function markdownFromFile(fname: string): Promise<string> {
  const converter = new Showdown.Converter();
  const filename = join(process.cwd(), "content", fname!);
  const markdownText = await readFile(filename, "utf8");
  let contentWithoutFrontmatter = markdownText;
  const frontmatterEndIndex = markdownText.indexOf("---", 3);
  if (frontmatterEndIndex !== -1) {
    contentWithoutFrontmatter = markdownText
      .slice(frontmatterEndIndex + 3)
      .trim();
  }
  return converter.makeHtml(contentWithoutFrontmatter);
}

export async function getFeed(
  content: Array<LinksCollectionItem | BlogCollectionItem>
): Promise<Feed> {
  const feed = new Feed({
    title: "fruitbat's website",
    id: BASE_URL,
    copyright: "all rights reserved",
    description: "a feed for all my projects and ramblings 💚🦇",
    link: BASE_URL,
    author: { name: "fruitbat", link: BASE_URL },
    favicon: BASE_URL + "/favicon.svg",
    language: "en",
  });

  content = content.sort(
    (a, b) => b.timestamp - a.timestamp
  );
  for (const contentItem of content) {
    feed.addItem({
      title: contentItem.title ?? "no title",
      date: new Date(contentItem.timestamp * 1000),
      link: (() => {
        // check if content item is not undefined or empty
        if (isLinksCollection(contentItem)) {
          return contentItem.links[0].url;
        }
        return BASE_URL + contentItem.path;
      })(),
      image: BASE_URL + "/image/" + contentItem.image?.url,
      description: contentItem.description,
      category: contentItem.tags.map((item) => {
        return { domain: "zoe.kittycat.homes", term: item, name: item };
      }),
    });
  }
  for (const doc of content) {
    let content = "";
    if (doc.image != undefined) {
      content =
        content +
        `<img src='https://zoe.kittycat.homes${doc.image}' alt='${doc.image.alt}' />`;
    }
  }
  return feed;
}
