class Pwa {

    constructor(self) {
        this.scope = self;
        let Version = new URL(location).searchParams.get("version");
        this.CACHE_VERSION = Version;
        this.BASE_CACHE_FILES = [
            '/',
            '/favicon.ico',
            '/en/',
            '/en/about/',
            '/en/blog/',
            '/en/blog/index.xml',
            '/en/favicon.ico',
            '/en/index.xml',
            '/en/manifest.json',
            '/en/offline/',
            '/en/uses/',
            '/fr/',
            '/fr/about/',
            '/fr/blog/',
            '/fr/blog/index.xml',
            '/fr/favicon.ico',
            '/fr/index.xml',
            '/fr/manifest.json',
            '/fr/offline/',
            '/fr/uses/',
            '/css/main.min.css',
            '/theme.css',
            '/theme.js',
            '/images/badges/activemq.svg',
            '/images/badges/algolia.svg',
            '/images/badges/altair.svg',
            '/images/badges/analytics.svg',
            '/images/badges/android.svg',
            '/images/badges/androidstudio.svg',
            '/images/badges/ansible.svg',
            '/images/badges/apachecamel.svg',
            '/images/badges/apachemaven.svg',
            '/images/badges/apicurio.svg',
            '/images/badges/apollographql.svg',
            '/images/badges/arduino.svg',
            '/images/badges/asciidoc.svg',
            '/images/badges/bamboo.svg',
            '/images/badges/bash.svg',
            '/images/badges/beats.svg',
            '/images/badges/bitbucket.svg',
            '/images/badges/brave.svg',
            '/images/badges/chocolatey.svg',
            '/images/badges/chrome.svg',
            '/images/badges/circleci.svg',
            '/images/badges/cloudflare.svg',
            '/images/badges/codacy.svg',
            '/images/badges/confluence.svg',
            '/images/badges/consul.svg',
            '/images/badges/css3.svg',
            '/images/badges/curl.svg',
            '/images/badges/deezer.svg',
            '/images/badges/dependabot.svg',
            '/images/badges/devto-large.svg',
            '/images/badges/devto.svg',
            '/images/badges/diagramsnet.svg',
            '/images/badges/discord-large.svg',
            '/images/badges/discord.svg',
            '/images/badges/docker.svg',
            '/images/badges/elasticsearch.svg',
            '/images/badges/fastlane.svg',
            '/images/badges/filezilla.svg',
            '/images/badges/focustodo.svg',
            '/images/badges/gatling.svg',
            '/images/badges/gatsby.svg',
            '/images/badges/git.svg',
            '/images/badges/github-large.svg',
            '/images/badges/github.svg',
            '/images/badges/githubactions.svg',
            '/images/badges/gitkraken.svg',
            '/images/badges/gitlab-large.svg',
            '/images/badges/gitlab.svg',
            '/images/badges/gitpod.svg',
            '/images/badges/gitter.svg',
            '/images/badges/gmail-large.svg',
            '/images/badges/gmail.svg',
            '/images/badges/gradle.svg',
            '/images/badges/grafana.svg',
            '/images/badges/graphql.svg',
            '/images/badges/hangouts.svg',
            '/images/badges/hashnode-large.svg',
            '/images/badges/hashnode.svg',
            '/images/badges/heidisql.svg',
            '/images/badges/hibernate.svg',
            '/images/badges/html5.svg',
            '/images/badges/hugo.svg',
            '/images/badges/hyper.svg',
            '/images/badges/influxdb.svg',
            '/images/badges/intellijidea.svg',
            '/images/badges/jamstack.svg',
            '/images/badges/java.svg',
            '/images/badges/jekyll.svg',
            '/images/badges/jira.svg',
            '/images/badges/junit.svg',
            '/images/badges/kibana.svg',
            '/images/badges/kotlin.svg',
            '/images/badges/latex.svg',
            '/images/badges/linkedin-large.svg',
            '/images/badges/linkedIn.svg',
            '/images/badges/linux.svg',
            '/images/badges/logstash.svg',
            '/images/badges/macos.svg',
            '/images/badges/maoudiacom-large.svg',
            '/images/badges/maoudiacom.svg',
            '/images/badges/mariadb.svg',
            '/images/badges/markdown.svg',
            '/images/badges/mattermost.svg',
            '/images/badges/medium-large.svg',
            '/images/badges/medium.svg',
            '/images/badges/meet.svg',
            '/images/badges/microcks.svg',
            '/images/badges/microservices.svg',
            '/images/badges/mongodb.svg',
            '/images/badges/mqtt.svg',
            '/images/badges/mremoteng.svg',
            '/images/badges/mutiny.svg',
            '/images/badges/myki.svg',
            '/images/badges/mysql.svg',
            '/images/badges/netlify.svg',
            '/images/badges/npm.svg',
            '/images/badges/numpy.svg',
            '/images/badges/ohmyzsh.svg',
            '/images/badges/openapi.svg',
            '/images/badges/oss.svg',
            '/images/badges/overleaf.svg',
            '/images/badges/pandas.svg',
            '/images/badges/pocket-large.svg',
            '/images/badges/pocket.svg',
            '/images/badges/postgresql.svg',
            '/images/badges/postman.svg',
            '/images/badges/python.svg',
            '/images/badges/quarkus.svg',
            '/images/badges/quora-large.svg',
            '/images/badges/quora.svg',
            '/images/badges/reactivex.svg',
            '/images/badges/reactor.svg',
            '/images/badges/reddit-large.svg',
            '/images/badges/reddit.svg',
            '/images/badges/redis.svg',
            '/images/badges/rss-large.svg',
            '/images/badges/rss.svg',
            '/images/badges/rxjava.svg',
            '/images/badges/slack.svg',
            '/images/badges/slides-large.svg',
            '/images/badges/slides.svg',
            '/images/badges/sonarqube.svg',
            '/images/badges/sonatype.svg',
            '/images/badges/speakerdeck-large.svg',
            '/images/badges/speakerdeck.svg',
            '/images/badges/spotify.svg',
            '/images/badges/spring.svg',
            '/images/badges/springboot.svg',
            '/images/badges/sql.svg',
            '/images/badges/stackoverflow-large.svg',
            '/images/badges/stackoverflow.svg',
            '/images/badges/travisci.svg',
            '/images/badges/twitter-large.svg',
            '/images/badges/twitter.svg',
            '/images/badges/ublockorigin.svg',
            '/images/badges/ubuntu.svg',
            '/images/badges/visualstudiocode.svg',
            '/images/badges/windows.svg',
            '/images/badges/windowsterminal.svg',
            '/images/badges/yammer.svg',
            '/images/badges/zulip.svg',
            '/images/banners/banner-700x350.png',
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
        this.host = `${self.location.protocol}//${self.location.host}`;
        console.info(`Host: ${this.host}`);
        this.OFFLINE_PAGE = '/offline/';
        this.NOT_FOUND_PAGE = '/404.html';
        this.CACHE_NAME = `content-v${this.CACHE_VERSION}`;
        this.MAX_TTL = 86400;
        this.TTL_EXCEPTIONS = ["jpg", "jpeg", "png", "gif", "mp4"];
        let lang = new URL(location).searchParams.get("lang");
        this.LANG = lang
    }

    canCache(url) {
        if (url.startsWith("http://localhost")) {
            return true;
        }
        const result = url.toString().startsWith(this.host);
        return result;
    }

    getFileExtension(url) {
        const extension = url.split('.').reverse()[0].split('?')[0];
        return (extension.endsWith('/')) ? '/' : extension;
    }

    getTTL(url) {
        if (typeof url === 'string') {
            const extension = this.getFileExtension(url);
            return ~this.TTL_EXCEPTIONS.indexOf(extension) ?
                null : this.MAX_TTL;
        }
        return null;
    }

    async installServiceWorker() {
        try {
            await caches.open(this.CACHE_NAME).then((cache) => {
                return cache.addAll(this.BASE_CACHE_FILES);
            }, err => console.error(`Error with ${this.CACHE_NAME}`, err));
            return this.scope.skipWaiting();
        }
        catch (err) {
            return console.error("Error with installation: ", err);
        }
    }

    cleanupLegacyCache() {

        const currentCaches = [this.CACHE_NAME];

        return new Promise(
            (resolve, reject) => {
                caches.keys()
                    .then((keys) => keys.filter((key) => !~currentCaches.indexOf(key)))
                    .then((legacy) => {
                        if (legacy.length) {
                            Promise.all(legacy.map((legacyKey) => caches.delete(legacyKey))
                            ).then(() => resolve()).catch((err) => {
                                console.error("Error in legacy cleanup: ", err);
                                reject(err);
                            });
                        } else {
                            resolve();
                        }
                    }).catch((err) => {
                        console.error("Error in legacy cleanup: ", err);
                        reject(err);
                    });
            });
    }

    async preCacheUrl(url) {
        const cache = await caches.open(this.CACHE_NAME);
        const response = await cache.match(url);
        if (!response) {
            return fetch(url).then(resp => cache.put(url, resp.clone()));
        }
        return null;
    }

    register() {
        this.scope.addEventListener('install', event => {
            event.waitUntil(
                Promise.all([
                    this.installServiceWorker(),
                    this.scope.skipWaiting(),
                ]));
        });

        this.scope.addEventListener('activate', event => {
            event.waitUntil(Promise.all(
                [this.cleanupLegacyCache(),
                this.scope.clients.claim(),
                this.scope.skipWaiting()]).catch((err) => {
                    console.error("Activation error: ", err);
                    event.skipWaiting();
                }));
        });

        this.scope.addEventListener('fetch', event => {
            event.respondWith(
                caches.open(this.CACHE_NAME).then(async cache => {
                    if (!this.canCache(event.request.url)) {
                        return fetch(event.request);
                    }
                    const response = await cache.match(event.request);
                    if (response) {
                        const headers = response.headers.entries();
                        let date = null;
                        for (let pair of headers) {
                            if (pair[0] === 'date') {
                                date = new Date(pair[1]);
                                break;
                            }
                        }
                        if (!date) {
                            return response;
                        }
                        const age = parseInt(((new Date().getTime() - date.getTime()) / 1000).toString());
                        const ttl = this.getTTL(event.request.url);
                        if (ttl === null || (ttl && age < ttl)) {
                            return response;
                        }
                    }
                    return fetch(event.request.clone()).then(resp => {
                        if (resp.status < 400) {
                            if (this.canCache(event.request.url)) {
                                cache.put(event.request, resp.clone());
                            }
                            return resp;
                        }
                        else {
                            return cache.match(`/${this.LANG}${this.NOT_FOUND_PAGE}`);
                        }
                    }).catch(err => {
                        console.error(`Error fetching ${event.request.url} resulted in offline`, err);
                        return cache.match(`/${this.LANG}${this.OFFLINE_PAGE}`);
                    })
                }));
        });
    }
}

const pwa = new Pwa(self);
pwa.register();