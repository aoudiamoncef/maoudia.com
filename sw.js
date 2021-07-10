const CACHE_VERSION = 1;

const BASE_CACHE_FILES = [
    '/css/main.min.css',
    '/theme.css',
    '/theme.js',
    '/manifest.json',
    '/modernizr-simple.js',
    '/images/favicons/splash.png',
    '/images/favicons/android-chrome-192x192.png',
    '/images/favicons/android-chrome-384x384.png',
    '/images/favicons/apple-touch-icon-57x57.png',
    '/images/favicons/apple-touch-icon-72x72.png',
    '/images/favicons/apple-touch-icon-76x76.png',
    '/images/favicons/apple-touch-icon-114x114.png',
    '/images/favicons/apple-touch-icon-120x120.png',
    '/images/favicons/apple-touch-icon-144x144.png',
    '/images/favicons/apple-touch-icon-152x152.png',
    '/images/favicons/apple-touch-icon-180x180.png',
    '/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.woff2?17c283b4e785e073ec09dc72acebafac',
    '/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.woff2?a9557eb451f17dcd8e687327ea9383a0',
    '/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff2?cac68c831145804808381a7032fdc7c2',
    '/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff2?c500da19d776384ba69573ae6fe274e7',
    '/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.woff2?2efeb8cab5dd5cfbeb1b234ff52e92e6'
];

const OFFLINE_CACHE_FILES = [
    '/images/favicons/splash.png',
    '/images/favicons/android-chrome-192x192.png',
    '/images/favicons/android-chrome-384x384.png',
    '/images/favicons/apple-touch-icon-57x57.png',
    '/images/favicons/apple-touch-icon-72x72.png',
    '/images/favicons/apple-touch-icon-76x76.png',
    '/images/favicons/apple-touch-icon-114x114.png',
    '/images/favicons/apple-touch-icon-120x120.png',
    '/images/favicons/apple-touch-icon-144x144.png',
    '/images/favicons/apple-touch-icon-152x152.png',
    '/images/favicons/apple-touch-icon-180x180.png',
    '/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-700.woff2?17c283b4e785e073ec09dc72acebafac',
    '/fonts/open-sans-v17-latin-ext_vietnamese_cyrillic-ext_greek-ext-regular.woff2?a9557eb451f17dcd8e687327ea9383a0',
    '/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff2?cac68c831145804808381a7032fdc7c2',
    '/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff2?c500da19d776384ba69573ae6fe274e7',
    '/fonts/comfortaa-v28-greek_latin-ext_vietnamese_cyrillic-ext-700.woff2?2efeb8cab5dd5cfbeb1b234ff52e92e6'
];

const NOT_FOUND_CACHE_FILES = [
    '/404.html',
];

const OFFLINE_PAGE = '/offline/index.html';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 3600,
    json: 86400,
    js: 86400,
    css: 86400,
};

const CACHE_BLACKLIST = [
    (str) => {
       return !str.startsWith('http://localhost') ;
    },
];

const SUPPORTED_METHODS = [
    'GET',
];

/**
 * isBlackListed
 * @param {string} url
 * @returns {boolean}
 */
function isBlacklisted(url) {
    return (CACHE_BLACKLIST.length > 0) ? !CACHE_BLACKLIST.filter((rule) => {
        if(typeof rule === 'function') {
            return !rule(url);
        } else {
            return false;
        }
    }).length : false
}

/**
 * getFileExtension
 * @param {string} url
 * @returns {string}
 */
function getFileExtension(url) {
    let extension = url.split('.').reverse()[0].split('?')[0];
    return (extension.endsWith('/')) ? '/' : extension;
}

/**
 * getTTL
 * @param {string} url
 */
function getTTL(url) {
    if (typeof url === 'string') {
        let extension = getFileExtension(url);
        if (typeof MAX_TTL[extension] === 'number') {
            return MAX_TTL[extension];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/**
 * installServiceWorker
 * @returns {Promise}
 */
function installServiceWorker() {
    return Promise.all(
        [
            caches.open(CACHE_VERSIONS.assets)
                .then(
                    (cache) => {
                        return cache.addAll(BASE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.offline)
                .then(
                    (cache) => {
                        return cache.addAll(OFFLINE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.notFound)
                .then(
                    (cache) => {
                        return cache.addAll(NOT_FOUND_CACHE_FILES);
                    }
                )
        ]
    );
}

/**
 * cleanupLegacyCache
 * @returns {Promise}
 */
function cleanupLegacyCache() {

    let currentCaches = Object.keys(CACHE_VERSIONS)
        .map(
            (key) => {
                return CACHE_VERSIONS[key];
            }
        );

    return new Promise(
        (resolve, reject) => {

            caches.keys()
                .then(
                    (keys) => {
                        return legacyKeys = keys.filter(
                            (key) => {
                                return !~currentCaches.indexOf(key);
                            }
                        );
                    }
                )
                .then(
                    (legacy) => {
                        if (legacy.length) {
                            Promise.all(
                                legacy.map(
                                    (legacyKey) => {
                                        return caches.delete(legacyKey)
                                    }
                                )
                            )
                                .then(
                                    () => {
                                        resolve()
                                    }
                                )
                                .catch(
                                    (err) => {
                                        reject(err);
                                    }
                                );
                        } else {
                            resolve();
                        }
                    }
                )
                .catch(
                    () => {
                        reject();
                    }
                );

        }
    );
}


self.addEventListener(
    'install', event => {
        event.waitUntil(installServiceWorker());
    }
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
    'activate', event => {
        event.waitUntil(
            Promise.all(
                [
                    cleanupLegacyCache(),
                ]
            )
                .catch(
                    (err) => {
                        event.skipWaiting();
                    }
                )
        );
    }
);

self.addEventListener(
    'fetch', event => {

        event.respondWith(
            caches.open(CACHE_VERSIONS.content)
                .then(
                    (cache) => {

                        return cache.match(event.request)
                            .then(
                                (response) => {

                                    if (response) {

                                        let headers = response.headers.entries();
                                        let date = null;

                                        for (let pair of headers) {
                                            if (pair[0] === 'date') {
                                                date = new Date(pair[1]);
                                            }
                                        }

                                        if (date) {
                                            let age = parseInt((new Date().getTime() - date.getTime()) / 1000);
                                            let ttl = getTTL(event.request.url);

                                            if (ttl && age > ttl) {

                                                return new Promise(
                                                    (resolve) => {

                                                        return fetch(event.request)
                                                            .then(
                                                                (updatedResponse) => {
                                                                    if (updatedResponse) {
                                                                        cache.put(event.request, updatedResponse.clone());
                                                                        resolve(updatedResponse);
                                                                    } else {
                                                                        resolve(response)
                                                                    }
                                                                }
                                                            )
                                                            .catch(
                                                                () => {
                                                                    resolve(response);
                                                                }
                                                            );

                                                    }
                                                )
                                                    .catch(
                                                        (err) => {
                                                            return response;
                                                        }
                                                    );
                                            } else {
                                                return response;
                                            }

                                        } else {
                                            return response;
                                        }

                                    } else {
                                        return null;
                                    }
                                }
                            )
                            .then(
                                (response) => {
                                    if (response) {
                                        return response;
                                    } else {
                                        return fetch(event.request) 
                                            .then(
                                                (response) => {

                                                    if(response.status < 400) {
                                                        if (~SUPPORTED_METHODS.indexOf(event.request.method) && !isBlacklisted(event.request.url)) {
                                                            cache.put(event.request, response.clone());
                                                        }
                                                        return response;
                                                    } 
                                                    else {
                                                        return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
                                                            return cache.match(NOT_FOUND_PAGE);
                                                        })
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                                if(response) {
                                                    return response;
                                                }
                                            })
                                            .catch(
                                                () => {

                                                    return caches.open(CACHE_VERSIONS.offline)
                                                        .then(
                                                            (offlineCache) => {
                                                                return offlineCache.match(OFFLINE_CACHE_FILES)
                                                            }
                                                        )

                                                }
                                            )
                                        
                                    }
                                }
                            )
                            .catch(
                                (error) => {
                                    console.error('  Error in fetch handler:', error);
                                    throw error;
                                }
                            );
                    }
                )
        );

    }
);
