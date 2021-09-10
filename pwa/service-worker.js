import * as navigationPreload from "workbox-navigation-preload";
import {
  precacheAndRoute,
  matchPrecache,
  cleanupOutdatedCaches,
} from "workbox-precaching";
import { setDefaultHandler, setCatchHandler } from "workbox-routing";
import { registerRoute, NavigationRoute } from "workbox-routing";
import {
  NetworkFirst,
  NetworkOnly,
  StaleWhileRevalidate,
  CacheFirst,
} from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { setCacheNameDetails, clientsClaim, cacheNames } from "workbox-core";
import * as googleAnalytics from "workbox-google-analytics";

const VERSION = 1.0;

self.addEventListener('activate', event => {
  event.waitUntil(async function() {
      const userCacheNames = await caches.keys();
      await Promise.all(userCacheNames.map(async cacheName => {
          if (!Object.values(cacheNames).includes(cacheName)) {
              return await caches.delete(cacheName);
          }
          return await Promise.resolve();
      }));
  }());
});

clientsClaim();

googleAnalytics.initialize({
  parameterOverrides: {
    cd1: "offline",
  },
});

setCacheNameDetails({
  prefix: "maoudia",
  suffix: `v${VERSION}`,
  precache: "precache",
  runtime: "runtime",
  googleAnalytics: "ga",
});

precacheAndRoute(self.__WB_MANIFEST);

setDefaultHandler(new StaleWhileRevalidate());

setCatchHandler(async ({ event }) => {
  switch (event.request.destination) {
    case "document":
      let lang = "/";
      if (event.request.url.indexOf("/fr/") !== -1) {
        lang = "/fr";
      }
      return matchPrecache(`${lang}/offline/index.html`);

    default:
      return Response.error();
  }
});

registerRoute(
  new RegExp("/(.*)blog(.*)/"),
  new NetworkFirst({
    cacheName: `maoudia-blog-cache-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.mode === "navigate",
  new StaleWhileRevalidate({
    cacheName: `maoudia-navigation-cache-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "font",
  new CacheFirst({
    cacheName: `maoudia-font-cache-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: `maoudia-image-cache-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 250,
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "script",
  new CacheFirst({
    cacheName: `maoudia-script-cache-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "style",
  new CacheFirst({
    cacheName: `maoudia-style-cache-v${VERSION}`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24,
      }),
    ],
  })
);

registerRoute(
  "https://utteranc.es/client.js",
  new CacheFirst({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  ({ request }) =>
    request.url.startsWith(
      "https://github-readme-streak-stats.herokuapp.com"
    ) || request.url.startsWith("https://github-readme-stats.vercel.app"),
  new StaleWhileRevalidate({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
