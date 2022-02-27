// Don't do ever slightest change in the file or it may throw error

import { getPosts } from "../data";

const EXTERNAL_DATA_URL = "https://www.chaudharysubash.com.np/blog";

// The following commented is only note for creating sitemap using next-sitemap plugin
// "postbuild": "cross-env next-sitemap --config next-sitemap.js"
const createSitemap = (posts) => `
        ${posts
          .map((post) => {
            return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/${post.node.slug}`}</loc>
                    <lastmod>${post.node.updatedAt}</lastmod>
                    <changefreq>daily</changefreq>
                    <priority>0.9</priority>
                </url>
            `;
          })
          .join("")}
    `;

function sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const posts = await getPosts();
  const sitemapXml = createSitemap(posts);
  if (res) {
    res.setHeader("Content-Type", "text/xml");
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapXml}
      <url>
        <loc>https://www.chaudharysubash.com.np</loc>
        <lastmod>2022-01-01T03:32:34.84838+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
      <url>
        <loc>https://www.chaudharysubash.com.np/blog</loc>
        <lastmod>2022-01-01T03:32:34.84838+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
      </urlset>`);
    res.end();
  }
  return {
    props: {},
  };
}

export default sitemap;
