import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
// import { getPosts } from "../data";

async function generate() {
  // const postSlugs = [];
  // const posts = (await getPosts()) || [];

  // posts.map((post) => {
  //   postSlugs.push(post.node.slug);
  // });
  // console.log(postSlugs);

  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.jsx",
    "!pages/_*.jsx",
    "!pages/api",
    "!pages/404.jsx",
  ]);

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace("pages", "")
            .replace("data", "")
            .replace(".tsx", "")
            .replace(".mdx", "");
          const route = path === "/index" ? "" : path;

          return `
            <url>
                <loc>${`localhost:3000${route}`}</loc>
            </url>
          `;
        })
        .join("")}
  </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });
  writeFileSync("public/sitemap.xml", formatted);
  // "prebuild": "node ./scripts/generate-sitemap.mjs",
  // node ./scripts/generate-rss.mjs &&
}

generate();
