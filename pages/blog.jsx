import Link from "next/link";
import React from "react";
import { Header } from "../components";
import { getPosts } from "../data";
import { Layout } from "../layouts";
import { useState } from "react";

function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogPosts = posts.filter((post) =>
    post.node.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Layout
      title="Blog - Subash Chaudhary"
      description="Want to know advanced topics on Front-end development? You are in the right place. You can find different blogs covering advanced topics on front-end development."
    >
      <Header
        title="Blogs"
        paragraphs="Here, you can find blogs on different topics related to programming. Mainly, blogs are about front-end development, UI designs, etc."
        searchbar={{ placeholder: "Search Blogs..." }}
        changeSearch={(search) => setSearchTerm(search)}
      />
      <div className="py-20 max-w-custom space-y-10 md:space-y-20">
        <div className="space-y-8">
          <h1>All Blog Posts</h1>
          {filteredBlogPosts
            .map((post, index) => (
              <Link key={index} href={`/blog/${post.node.slug}`} passHref>
                <div className="bg-secondary dark:bg-secondary_dark p-4 sm:p-8 rounded-md hover:opacity-80 cursor-pointer transition-all hover:scale-[1.01]">
                  <span className="text-xl font-bold">{post.node.title}</span>
                  <p className="mt-1">{post.node.metaDescription}</p>
                </div>
              </Link>
            ))
            .reverse()}
          {!filteredBlogPosts.length && <p>No posts found.</p>}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts: posts,
    },
  };
}
