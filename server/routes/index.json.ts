import { getFeed } from "~/scripts/feed";

export default defineEventHandler(async (event) => {
  const links = await queryCollection(event, 'links').all();
  const posts = await queryCollection(event, 'blog').all();

  const feed = await getFeed([...links, ...posts]);
  const feedString = feed.json1();
  event.node.res.setHeader("content-type", "application/feed+json");
  event.node.res.end(feedString);
});
