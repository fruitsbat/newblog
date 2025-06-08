import { getFeed } from "~/scripts/feed";

export default defineEventHandler(async (event) => {
  const links = await queryCollection(event, 'links').all();
  const posts = await queryCollection(event, 'blog').all();

  const feed = await getFeed([...links, ...posts]);
  const feedString = feed.atom1();
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
