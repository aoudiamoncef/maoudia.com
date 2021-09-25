const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./pwa/service-worker.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "service-worker.bundle.js",
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "**/offline/**/*.html",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "*.{html,ico,webp}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        }, 
        {
          from: "images/offline/*.{ico,svg,png,webp}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
      ],
    }),

    new InjectManifest({
      mode: 'development',
      swSrc: "./pwa/service-worker.js",
      swDest: "./service-worker.js",
      exclude: ["service-worker.bundle.js", "sw.js"],
      maximumFileSizeToCacheInBytes: 6710886,
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
};
