const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media.graphassets.com",
      "media.graphcms.com",
      "images.pexels.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
