import { useEffect, useState } from "react";
import { Button } from ".";

import { useRouter } from "next/router";
import { getPosts } from "../data";
import { shuffle } from "../utils/shuffle";

function FeaturedPosts() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((result) => setPosts(result));
  }, []);

  const randomizedPosts = shuffle(posts);

  return (
    <div className="mt-20 space-y-5">
      <h1 className="relative mt-10" id="featured-post-component">
        <a className="heading-hook" href="#featured-post-component">
          <span className="icon icon-link"></span>
        </a>

        {router.pathname === `/blog/[slug]` ? "Similar Blogs" : "Read Blogs"}
      </h1>
      <p>
        See my random blog posts. Everytime you{" "}
        <span className="text-accent dark:text-accent_dark">refresh</span> the
        page, new random blog post will appear. More blog posts means more
        randomness.
      </p>
      <p className="italic">
        Want to{" "}
        <span className="text-accent dark:text-accent_dark">publish</span> your
        blog post in my site? Contact me from contact page or you can send me a
        mail directly.
      </p>

      <div>
        {randomizedPosts.map((post, index) => {
          if (index > 2) return;
          else if (router.asPath === `/blog/${post.node.slug}`) return;
          return (
            <div
              key={index + 1}
              className="py-5 border-b transform transition-all hover:scale-[1.01] cursor-pointer"
              onClick={() => {
                router.push(`/blog/${post.node.slug}`);
              }}
            >
              <div className="md:text-lg">
                <span className="mr-2">0{index + 1}.</span> {post.node.title}
              </div>
            </div>
          );
        })}
      </div>

      <Button onClick={() => router.push("/blog")}>Read All Blogs</Button>
    </div>
  );
}

export default FeaturedPosts;
