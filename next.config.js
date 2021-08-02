const path = require("path");

module.exports = {
  env: {},
  images: {
    domains: [
      "images.microcms-assets.io",
      "qiita-user-contents.imgix.net",
      "staging-qiita-user-contents.imgix.net",
      "assets.st-note.com",
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
