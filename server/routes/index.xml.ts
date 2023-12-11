import { contentList, newestDate } from "~/content/list";
import { Feed } from "feed";
import { FeedItem } from "~/content/classes";

export default defineEventHandler(async (event) => {
  const feed = new Feed({
    title: "bat website",
    copyright: "all rights reserved",
    id: "https://zoe.kittycat.homes",
    description: "a personal website",
    link: "https://zoe.kittycat.homes",
    author: { name: "zoe", link: "https://zoe.kittycat.homes" },
    generator: "funny typescript moment",
    updated: newestDate(),
    language: "en",
  });

  contentList
    .filter((contentItem) => {
      return contentItem instanceof FeedItem;
    })
    .map((contentItem) => {
      return contentItem as FeedItem;
    })
    .forEach((feedItem) => {
      feed.addItem({
        date: feedItem.updated,
        link: feedItem.link,
        title: feedItem.title,
        id: feedItem.link,
        description: feedItem.summary,
        enclosure: feedItem.enclosure,
      });
    });
  const feedString = feed.rss2();
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
