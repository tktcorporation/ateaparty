const path = require("path");

module.exports = {
  env: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
      {
        protocol: "https",
        hostname: "qiita-user-contents.imgix.net",
      },
      {
        protocol: "https",
        hostname: "staging-qiita-user-contents.imgix.net",
      },
      {
        protocol: "https",
        hostname: "assets.st-note.com",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/"),
    };
    return config;
  },
};
