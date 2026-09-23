module.exports = {
  reactStrictMode: true,
  // Required for next-mdx-remote when bundling with Turbopack (default since Next 16)
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.graphassets.com" },
      { protocol: "https", hostname: "media.graphcms.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "example.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};
