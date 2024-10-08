import { Feed } from "feed";
import type { ParsedContentExtension } from "./parse_extension";
import Showdown from "showdown";
import { readFile } from "fs/promises";
import { join } from "path";

const BASE_URL = "https://zoe.kittycat.homes";

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

export async function getFeed(): Promise<Feed> {
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
  const content: Array<ParsedContentExtension> = (
    (await $fetch("/api/_content/query")) as Array<ParsedContentExtension>
  )
    .filter((item) => {
      return item.tags;
    })
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  for (const contentItem of content) {
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
      image: BASE_URL + "/image/" + contentItem.imageURL,
      description: await markdownFromFile(contentItem._file!),
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
        `<img src='https://zoe.kittycat.homes${doc.image}' alt='${doc.image_description}' />`;
    }
  }
  return feed;
}
