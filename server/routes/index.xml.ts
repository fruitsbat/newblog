import { getFeed } from "~/scripts/feed";

export default defineEventHandler(async (event) => {
  const feed = await getFeed();
  const feedString = feed.rss2();
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
