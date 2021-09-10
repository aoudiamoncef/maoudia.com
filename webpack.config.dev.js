const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
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
          from: "**/offline/**/*.{html,ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "**/uses/**/*.{html,ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "*.{ico,json}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "fr/*.{ico,json}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "*.{js,css,woff2}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "images/badges/*-large*.{ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "images/favicons/*.{ico,json,svg,png,xml}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
      ],
    }),

    new InjectManifest({
      mode: "development",
      swSrc: "./pwa/service-worker.js",
      swDest: "./service-worker.js",
      exclude: ["service-worker.bundle.js", "sw.js", "amp/**"],
      maximumFileSizeToCacheInBytes: 6710886,
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
};
