import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import { shuffle } from "../utils/shuffle";

function FeaturedPosts() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => (r.ok ? r.json() : []))
      .then((result) => setPosts(Array.isArray(result) ? result : []))
      .catch(() => setPosts([]));
  }, []);

  const randomizedPosts = shuffle(posts);

  return (
    <div className="mt-20 space-y-5">
      <h1 className="relative mt-10" id="featured-post-component">
        <a
          className="heading-hook"
          href="#featured-post-component"
          aria-label="Permalink to this section"
        >
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
            <Link
              key={index + 1}
              href={`/blog/${post.node.slug}`}
              className="block py-5 px-6 mb-4 glass glass-subtle glass-edge glass-hover sheen rounded-2xl cursor-pointer"
            >
              <div className="md:text-lg">
                <span className="mr-2">0{index + 1}.</span> {post.node.title}
              </div>
            </Link>
          );
        })}
      </div>

      <Button onClick={() => router.push("/blog")}>Read All Blogs</Button>
    </div>
  );
}

export default FeaturedPosts;
