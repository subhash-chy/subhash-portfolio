import { getPosts } from "../../data";

export default async function handler(_, res) {
  try {
    const posts = await getPosts();
    // getPosts() already degrades to [] when the CMS is unreachable
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(200).json([]);
  }
}
