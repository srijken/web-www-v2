module.exports = {
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en"
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] }
    });
    return cfg;
  }
};
