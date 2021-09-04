/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-e9e58f52'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.setCacheNameDetails({
    prefix: "minimal"
  });
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "en/about/index.html",
    "revision": "af9b61588922606eb0bce8e36e6f7f27"
  }, {
    "url": "en/amp/about/index.html",
    "revision": "8148232b7a1ef39c503ab686a629f560"
  }, {
    "url": "en/amp/link/about/index.html",
    "revision": "82b1fa1565644d31e0452f4a20fc21d2"
  }, {
    "url": "en/link/about/index.html",
    "revision": "82b1fa1565644d31e0452f4a20fc21d2"
  }, {
    "url": "fr/about/index.html",
    "revision": "6ff02704c3bc549a97851b30fda7e141"
  }, {
    "url": "fr/amp/about/index.html",
    "revision": "b96a687e69ed19f7667abe09f7477295"
  }, {
    "url": "fr/amp/link/about/index.html",
    "revision": "914078cef1f08a94f76967579ad1c4b7"
  }, {
    "url": "fr/link/about/index.html",
    "revision": "914078cef1f08a94f76967579ad1c4b7"
  }, {
    "url": "en/amp/link/uses/index.html",
    "revision": "82f79c07226667fb4a01ef47350e9646"
  }, {
    "url": "en/amp/uses/index.html",
    "revision": "3406b41972a9dc576c8cd33846d12552"
  }, {
    "url": "en/link/uses/index.html",
    "revision": "82f79c07226667fb4a01ef47350e9646"
  }, {
    "url": "en/uses/index.html",
    "revision": "7bfa6cce2058568967bde84d73a1f54a"
  }, {
    "url": "fr/amp/link/uses/index.html",
    "revision": "f54b5a291d273b8a932bbbeee5dc7fc5"
  }, {
    "url": "fr/amp/uses/index.html",
    "revision": "10b566736a214ebda9908b3bc1d77f85"
  }, {
    "url": "fr/link/uses/index.html",
    "revision": "f54b5a291d273b8a932bbbeee5dc7fc5"
  }, {
    "url": "fr/uses/index.html",
    "revision": "94a812d0065bc3f56742cf2028921662"
  }, {
    "url": "en/favicon.ico",
    "revision": "8360b017a5a8f2944183819e99a8f0d5"
  }, {
    "url": "en/index.json",
    "revision": "77fe87dc10324ee9622b13ccd507c62e"
  }, {
    "url": "en/manifest.json",
    "revision": "b97a4f42cd984b9f0c0b7296696127af"
  }, {
    "url": "fr/favicon.ico",
    "revision": "8360b017a5a8f2944183819e99a8f0d5"
  }, {
    "url": "fr/index.json",
    "revision": "c2e2b053a0bf7147fd46d196c784f7cf"
  }, {
    "url": "fr/manifest.json",
    "revision": "f740bc78fb6777170bfad9eb50c9c085"
  }, {
    "url": "static/images/badges/devto-large.7ccb27b5d51208dd9db5511ea33cf7a3a82e7576e97f6a9e34b9b04e75bd95f6.svg",
    "revision": "6bd3699488a48b437acccfc051616241"
  }, {
    "url": "static/images/badges/discord-large.1b2a28785c798e7d9ce6fbdfa1f7aa3b241324be14760be8b987f8a5fdab1652.svg",
    "revision": "41c5cead5cbf9ffbe72a2ccecab1575d"
  }, {
    "url": "static/images/badges/github-large.5b49c853881fdb26b826f1431b146cd16db146c6b4787e8ad3884dcbf9c43388.svg",
    "revision": "cb84ff14581587369789524704a796d4"
  }, {
    "url": "static/images/badges/gitlab-large.9e9cf89bd0416581ce6951f905a50e51a809d16649a236330917ac8bb558389e.svg",
    "revision": "543984bbeb9f9e13ffbbe39dbd54eda6"
  }, {
    "url": "static/images/badges/gmail-large.3fbd01cc031393c6f1a44b724fa27aa4a91a844861f533333bf1ab2355a9e744.svg",
    "revision": "4ffbb6a9d559e79f84c7419b6b61229f"
  }, {
    "url": "static/images/badges/hashnode-large.18004d5647b230e8334dd4d3f7b1e03794a6086458b7724df8432f954f4d57d2.svg",
    "revision": "8ab315999cf5e41a86754b93ab53d3d0"
  }, {
    "url": "static/images/badges/linkedin-large.0299573303ae377e45499987c2e0759327d35b50462d84422f171c5aef9b6342.svg",
    "revision": "22c0b926c1012e4b8dac447cfa644d03"
  }, {
    "url": "static/images/badges/maoudiacom-large.bf6113fa1b66691e8104a1ce7aec53d0eb625ba9d7176002a5ea7ab79eb716a3.svg",
    "revision": "9b44e9b60754a216427db2362a111676"
  }, {
    "url": "static/images/badges/medium-large.3a077c94d085b5a20276b08c1564b878a569f453af76e8ecfcd4f04a0048c31b.svg",
    "revision": "7ba7d01309c98f280791faf28494dddf"
  }, {
    "url": "static/images/badges/pocket-large.310c76ceeadf28e0943abebceaed2705bd7d8235335b302bd7da3d288a24dab9.svg",
    "revision": "2738252636caeddb67c7819d819088e6"
  }, {
    "url": "static/images/badges/quora-large.e19f4c0ba25ee91469da8bdf240719521ebe7df6cf5bdbd800292180399a6a57.svg",
    "revision": "f4d963ce289e14d2c9267c20cbc46d6a"
  }, {
    "url": "static/images/badges/reddit-large.74de7208777bf8f15e4d60ea84c3277a7c0daab5cd1205c3184432244e20f8f9.svg",
    "revision": "6bf1a7a889c8d253944c4dfb7fff2253"
  }, {
    "url": "static/images/badges/rss-large.ba5266d0b8e2ab31567ca87eb2508f49d430186e93c9eecd772cbc1a2a598bcc.svg",
    "revision": "9196895d5af03233c2b66029edee4f19"
  }, {
    "url": "static/images/badges/slides-large.08242139362a541784d79632f3dd89e2536b4bd479be8d0ecd6052faf8dad18f.svg",
    "revision": "a8435ec9d0c0b9e8c0818437ed258010"
  }, {
    "url": "static/images/badges/speakerdeck-large.b0659c5529948ef6da6b4cd4f868d2e5eb8ebef0a9aad1ec7cf6114c3a3bcd88.svg",
    "revision": "7ee4e1fb04a540323499da4854a78199"
  }, {
    "url": "static/images/badges/stackoverflow-large.f361dfc12cd880a0a2c36633883df4cc5bd0d07e2493d6ffb8c7c78be7a36160.svg",
    "revision": "00df0eb2803e4a4bda6e10479dda642c"
  }, {
    "url": "static/images/badges/twitter-large.e8f1e37b86e3c29f8c9b84be01610c417ade797facafa8964a1d54c41ecaf98c.svg",
    "revision": "c2b770dcad78483c3c7b348a8dceed13"
  }, {
    "url": "static/images/favicons/android-chrome-192x192.f354a8909946bac2051f2dfbe4b616465dcbd36f9e6f918f303f5161919c26b6.png",
    "revision": "5ba5baa50716e2913a4e998005ffccfe"
  }, {
    "url": "static/images/favicons/android-chrome-384x384.8b4d4c18f540207ccc4a1521b3985d8c461322f0936d43bdb4ded6bbc61338d7.png",
    "revision": "e6b2056f18a08b2e97ed235cd794be7e"
  }, {
    "url": "static/images/favicons/apple-touch-icon-114x114.3c2adbf2aaa9bb45d0dbbd29e21d92cd2688fcbd88d75e46bf55a2200682b77e.png",
    "revision": "cb09e2762f6738a9686e7301e389f45d"
  }, {
    "url": "static/images/favicons/apple-touch-icon-120x120.b8314c8014d93c38f7d153513a6a2acc148422cab18016ba1936f96b90e3001b.png",
    "revision": "8c3607ae39dd00199d96ab33c0bad427"
  }, {
    "url": "static/images/favicons/apple-touch-icon-144x144.2da56c055352fcc5d0976ed72d2559caac0969d21c6a866e4956c1ff2b47309f.png",
    "revision": "ca2780c5cf59fabc05703917b83c78d0"
  }, {
    "url": "static/images/favicons/apple-touch-icon-152x152.f10dbd81442f70c37fcfa4c797b97fbd1ec849e8752ba72542e2aef6f42582c1.png",
    "revision": "d55942299e732522a6bf49adef6d7373"
  }, {
    "url": "static/images/favicons/apple-touch-icon-180x180.4de8581470b22f9b779e5f6bbc2192dfb16fec56aad6d0e411afe5161d5bfe64.png",
    "revision": "5ee7d8ffd5f26c322445fc8bffd1c8d7"
  }, {
    "url": "static/images/favicons/apple-touch-icon-57x57.2b832d5f10f995ba241cc19153cc7ce31dad306703d74c53500dce4d84bb4aa1.png",
    "revision": "e7d879879b7f7b2a57166a65945ffec8"
  }, {
    "url": "static/images/favicons/apple-touch-icon-60x60.45112bf65666b3698c922901394a5faca78693e2a19f5144894a0f1914bd56b7.png",
    "revision": "0a479784c4dbdef61a8d45fa013a1eac"
  }, {
    "url": "static/images/favicons/apple-touch-icon-72x72.c21da18cc0406087d2f6622c6df41603bbcb75700bf9cb6d6b07898f4a6bcc34.png",
    "revision": "634c488e41e93c06215b7201cddd6583"
  }, {
    "url": "static/images/favicons/apple-touch-icon-76x76.0b62aefcc147fe677058dedba7bcc974f1b3c4b5fb6a10e14565dac8ea492750.png",
    "revision": "ae4760edbf99cc14ce2266b0256d36fd"
  }, {
    "url": "static/images/favicons/browserconfig.xml",
    "revision": "fed7a0db7f6b9118af825fbafd7bcf1c"
  }, {
    "url": "static/images/favicons/favicon-16x16.3fb66335d0a1dc216d66dc81a8b25323bc59b6f1066a0cbb7dfb0f5985530c66.png",
    "revision": "4a7c77bc44a4139f0418bf066bf24b9e"
  }, {
    "url": "static/images/favicons/favicon-32x32.8ad849023e260d0a36056e5337c70ea85d2f4a6e6b4b8b27b54f846901dcc7fe.png",
    "revision": "44a170b74b8ae0a8c899478489a9f731"
  }, {
    "url": "static/images/favicons/favicon.ico",
    "revision": "9d0588f1f4c43e2f3ab2a8989e5616dd"
  }, {
    "url": "static/images/favicons/mstile-150x150.png",
    "revision": "f6d70614c9f1f73bad1f1306c7959756"
  }, {
    "url": "static/images/favicons/safari-pinned-tab.d28aeba1386207ac0c6f84bb48ac08b6ca57775573294b6263c3fcb4ea677c58.svg",
    "revision": "a6bd51f669d19c0f59ed41e9188d5fdf"
  }, {
    "url": "static/images/favicons/splash.f9c116e0f087ad82848c9cbf22b05e1e60e3369067f198462f4fbba1c6ceab82.png",
    "revision": "c14841875c8b86009d741ab2e085e73f"
  }], {
    "ignoreURLParametersMatching": [/^utm_/, /^fbclid$/]
  });
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(/(.*)blog(.*)/, new workbox.NetworkFirst({
    "cacheName": "blog-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxAgeSeconds: 86400,
      maxEntries: 50
    })]
  }), 'GET');
  workbox.registerRoute(/https:\/\/utteranc.es\/client\.js|\.(?:js)$/, new workbox.CacheFirst({
    "cacheName": "script-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 25
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:css)$/, new workbox.CacheFirst({
    "cacheName": "style-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 25
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.CacheFirst({
    "cacheName": "images-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 250
    })]
  }), 'GET');

});
