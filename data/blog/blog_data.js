import { request, gql } from "graphql-request";

// const token = process.env.PERSONAL_BLOG_TOKEN;
const graphqlAPI = `https://api-ap-northeast-1.graphcms.com/v2/ckvxh19hm3h4r01z0b5udb1ao/master`;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            metaDescription
          }
        }
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
  } catch (error) {
    console.error("Failed to fetch posts:", error?.message || error);
    return [];
  }
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          author
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        metaDescription
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
          markdown
        }
        markdown
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.error("Failed to fetch post details:", error?.message || error);
    return null;
  }
};
