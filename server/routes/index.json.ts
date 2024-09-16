import { getFeed } from "~/scripts/feed";

export default defineEventHandler(async (event) => {
  const feed = await getFeed();
  const feedString = feed.json1();
  event.node.res.setHeader("content-type", "application/feed+json");
  event.node.res.end(feedString);
});
