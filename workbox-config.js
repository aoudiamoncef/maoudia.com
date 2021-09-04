module.exports = {
  mode: "development",
  cacheId: "minimal",
  cleanupOutdatedCaches: true,
  offlineGoogleAnalytics: false,
  sourcemap: false,
  globDirectory: "public/",
  globPatterns: [
    "**/about/**/*.{html,ico,svg,png}",
    "**/uses/**/*.{html,ico,svg,png}",
    "en/*.{ico,json}",
    "fr/*.{ico,json}",
    "static/images/badges/*-large*.{ico,svg,png}",
    "static/images/favicons/*.{ico,json,svg,png,xml}",
  ],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: "static/sw.js",
  runtimeCaching: [
    {
      urlPattern: /(.*)blog(.*)/,
      handler: "NetworkFirst",
      options: {
        cacheName: "blog-cache",
        expiration: {
		  maxAgeSeconds: 24 * 60 * 60,
          maxEntries: 50
        },
      },
    },
    {
      urlPattern: /https:\/\/utteranc.es\/client\.js|\.(?:js)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "script-cache",
        expiration: {
          maxEntries: 25,
        },
      },
    },
    {
      urlPattern: /\.(?:css)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "style-cache",
        expiration: {
          maxEntries: 25,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images-cache",
        expiration: {
          maxEntries: 250,
        },
      },
    },
  ],
};
