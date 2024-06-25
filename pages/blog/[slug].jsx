import React from "react";
import { Header, MDXComponents } from "../../components";
import { Layout } from "../../layouts";
import { getPostDetails, getPosts } from "../../data";
import dayjs from "dayjs";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Rehype code highlighting
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

// Getting slugs from all the post
export async function getStaticPaths() {
  const posts = (await getPosts()) || [];
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

// Using the path coming from `getStaticPaths()` to get the post details
export async function getStaticProps({ params }) {
  const datas = (await getPostDetails(params.slug)) || [];
  const source = datas?.markdown;
  const { content, data } = matter(source);
  const mdx = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["heading-hook"],
            },
          },
        ],
      ],
    },
  });

  return {
    props: {
      post: datas,
      source: {
        source: mdx,
        frontMatter: data,
      },
    },
  };
}

function BlogDetails(props) {
  const { post, source } = props;

  // Calculating post reading time
  const read_time = Math.floor(
    0.008 *
      post.markdown
        .toString()
        .split(" ")
        .filter((el) => {
          return el.length;
        }).length
  );

  return (
    <Layout
      title={`${source.frontMatter.title} - Subhash Chaudhary`}
      description={source.frontMatter.description}
      date={post.publishedAt}
      type="article"
      image="/profile-pic.png"
    >
      <article>
        <Header
          title={post.title}
          author={post.author.author}
          author_photo={post.author.photo?.url}
          read_time={read_time}
          post_created_date={dayjs(post.createdAt).format("MMMM D, YYYY")}
        />
        <div className="py-20 max-w-custom">
          <MDXRemote {...source.source} components={MDXComponents} />
        </div>
      </article>
    </Layout>
  );
}

export default BlogDetails;
