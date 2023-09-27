// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

module_exports = {
  trailingSlash: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] }
    });
    // if (!cfg.plugins) cfg.plugins = [];
    // cfg.plugins.push(
    //   new HtmlWebpackPlugin(),
    //   new CspHtmlWebpackPlugin({
    //     "script-src": "",
    //     "style-src": ""
    //   })
    // );
    return cfg;
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    deviceSizes: [320, 640, 1200, 1920]
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/static",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_exportFolderName: "optimzed",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: false
  }
};

const env = process.env.NODE_ENV;
if (env == "development") {
  /*
  Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains;"
  Header always append X-Frame-Options DENY
  Header set X-Content-Type-Options nosniff
  Header set X-XSS-Protection "1; mode=block"
  Header set Content-Security-Policy "default-src 'none'; font-src 'self'; img-src 'self' data:; script-src 'self' https://unpkg.com/; style-src 'self'; connect-src 'self';"

  Header always set Referrer-Policy "same-origin"

  */
  module_exports.headers = async function () {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; font-src 'self'; img-src 'self' data:; script-src 'self' https://unpkg.com/; style-src 'self'; connect-src 'self';"
          }
        ]
      }
    ];
  };
} else if (env == "production") {
  module_exports.output = "export";
}

module.exports = module_exports;
