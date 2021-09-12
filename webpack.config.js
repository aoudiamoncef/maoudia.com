const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
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
          from: "**/about/**/*.html",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "**/offline/**/*.html",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "**/uses/**/*.{html,ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "*.{html,json,ico,svg,png,js,css,woff2}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "fr/*.{html,ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "images/badges/*-large*.{ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },  
        {
          from: "images/offline/*.{ico,svg,png}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
        {
          from: "images/favicons/*.{ico,svg,png,xml}",
          to: path.resolve(__dirname, "dist"),
          context: "public/",
        },
      ],
    }),

    new InjectManifest({
      swSrc: "./pwa/service-worker.js",
      swDest: "./service-worker.js",
      exclude: ["service-worker.bundle.js", "sw.js", "amp/**"],
      maximumFileSizeToCacheInBytes: 6710886,
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
};
