(()=>{"use strict";var e={272:()=>{try{self["workbox:background-sync:6.2.4"]&&_()}catch(e){}},895:()=>{try{self["workbox:cacheable-response:6.2.4"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.2.4"]&&_()}catch(e){}},612:()=>{try{self["workbox:google-analytics:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}let t,a;s(272);const n=new WeakMap,r=new WeakMap,i=new WeakMap,c=new WeakMap,o=new WeakMap;let h={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return r.get(e);if("objectStoreNames"===t)return e.objectStoreNames||i.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return l(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){return"function"==typeof e?(s=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(s)?function(...e){return s.apply(d(this),e),l(n.get(this))}:function(...e){return l(s.apply(d(this),e))}:function(e,...t){const a=s.call(d(this),e,...t);return i.set(a,e.sort?e.sort():[e]),l(a)}:(e instanceof IDBTransaction&&function(e){if(r.has(e))return;const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),a()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)}));r.set(e,t)}(e),c=e,(t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>c instanceof e))?new Proxy(e,h):e);var s,c}function l(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(l(e.result)),a()},r=()=>{s(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&n.set(t,e)})).catch((()=>{})),o.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=u(e);return t!==e&&(c.set(e,t),o.set(t,e)),t}const d=e=>o.get(e);function f(e,t,{blocked:s,upgrade:a,blocking:n,terminated:r}={}){const i=indexedDB.open(e,t),c=l(i);return a&&i.addEventListener("upgradeneeded",(e=>{a(l(i.result),e.oldVersion,e.newVersion,l(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),c}const p=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],w=new Map;function g(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(w.get(t))return w.get(t);const s=t.replace(/FromIndex$/,""),a=t!==s,n=m.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!p.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let i=r.store;return a&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),n&&r.done]))[0]};return w.set(t,r),r}var y;y=h,h={...y,get:(e,t,s)=>g(e,t)||y.get(e,t,s),has:(e,t)=>!!g(e,t)||y.has(e,t)};const _="requests",b="queueName";class q{constructor(){this._db=null}async addEntry(e){const t=(await this.getDb()).transaction(_,"readwrite",{durability:"relaxed"});await t.store.add(e),await t.done}async getFirstEntryId(){const e=await this.getDb(),t=await e.transaction(_).store.openCursor();return null==t?void 0:t.value.id}async getAllEntriesByQueueName(e){const t=await this.getDb();return await t.getAllFromIndex(_,b,IDBKeyRange.only(e))||new Array}async deleteEntry(e){const t=await this.getDb();await t.delete(_,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const s=await this.getDb(),a=await s.transaction(_).store.index(b).openCursor(e,t);return null==a?void 0:a.value}async getDb(){return this._db||(this._db=await f("workbox-background-sync",3,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<3&&e.objectStoreNames.contains(_)&&e.deleteObjectStore(_),e.createObjectStore(_,{autoIncrement:!0,keyPath:"id"}).createIndex(b,b,{unique:!1})}}class v{constructor(e){this._queueName=e,this._queueDb=new q}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const R=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class x{constructor(e){"navigate"===e.mode&&(e.mode="same-origin"),this._requestData=e}static async fromRequest(e){const t={url:e.url,headers:{}};"GET"!==e.method&&(t.body=await e.clone().arrayBuffer());for(const[s,a]of e.headers.entries())t.headers[s]=a;for(const s of R)void 0!==e[s]&&(t[s]=e[s]);return new x(t)}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new x(this.toObject())}}const E="workbox-background-sync",D=new Set,C=e=>{const t={request:new x(e.requestData).toRequest(),timestamp:e.timestamp};return e.metadata&&(t.metadata=e.metadata),t};class k{constructor(t,{onSync:s,maxRetentionTime:a}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,D.has(t))throw new e("duplicate-queue-name",{name:t});D.add(t),this._name=t,this._onSync=s||this.replayRequests,this._maxRetentionTime=a||10080,this._queueStore=new v(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),s=[];for(const a of e){const e=60*this._maxRetentionTime*1e3;t-a.timestamp>e?await this._queueStore.deleteEntry(a.id):s.push(C(a))}return s}async _addRequest({request:e,metadata:t,timestamp:s=Date.now()},a){const n={requestData:(await x.fromRequest(e.clone())).toObject(),timestamp:s};t&&(n.metadata=t),await this._queueStore[`${a}Entry`](n),this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now(),s=await this._queueStore[`${e}Entry`]();if(s){const a=60*this._maxRetentionTime*1e3;return t-s.timestamp>a?this._removeRequest(e):C(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(s){throw await this.unshiftRequest(t),new e("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${E}:${this._name}`)}catch(e){}}_addSyncListener(){"sync"in self.registration?self.addEventListener("sync",(e=>{if(e.tag===`${E}:${this._name}`){const t=async()=>{let t;this._syncInProgress=!0;try{await this._onSync({queue:this})}catch(e){if(e instanceof Error)throw t=e,t}finally{!this._requestsAddedDuringSync||t&&!e.lastChance||await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}})):this._onSync({queue:this})}static get _queueNames(){return D}}class T{constructor(e,t){this.fetchDidFail=async({request:e})=>{await this._queue.pushRequest({request:e})},this._queue=new k(e,t)}}const N={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},S=e=>[N.prefix,e,N.suffix].filter((e=>e&&e.length>0)).join("-"),L=e=>e||S(N.googleAnalytics),U=e=>e||S(N.precache),I=e=>e||S(N.runtime);s(80);const P=e=>e&&"object"==typeof e?e:{handle:e};class O{constructor(e,t,s="GET"){this.handler=P(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=P(e)}}class A{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,P(e))}setCatchHandler(e){this._catchHandler=P(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}s(873);const K={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};function M(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class j{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const B=new Set;function W(e){return new Promise((t=>setTimeout(t,e)))}function F(e){return"string"==typeof e?new Request(e):e}class H{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new j,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let a=F(t);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=F(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const a=F(t);await W(0);const n=await this.getCacheKey(a,"write");if(!s)throw new e("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(s);if(!i)return!1;const{cacheName:c,matchOptions:o}=this._strategy,h=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(e,t,s,a){const n=M(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(n===M(t.url,s))return e.match(t,a)}(h,n.clone(),["__WB_REVISION__"],o):null;try{await h.put(n,u?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of B)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:l,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=F(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class ${constructor(e={}){this.cacheName=I(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new H(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(t,s,a){let n;await t.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,t),!n||"error"===n.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(n=await r({error:e,event:a,request:s}),n)break;if(!n)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))n=await e({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class Q extends ${constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(K),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,s){const a=[],n=[];let r;if(this._networkTimeoutSeconds){const{id:e,promise:i}=this._getTimeoutPromise({request:t,logs:a,handler:s});r=e,n.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:t,logs:a,handler:s});n.push(i);const c=await s.waitUntil((async()=>await s.waitUntil(Promise.race(n))||await i)());if(!c)throw new e("no-response",{url:t.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}class G extends ${constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,s){let a,n;try{const e=[s.fetch(t)];if(this._networkTimeoutSeconds){const t=W(1e3*this._networkTimeoutSeconds);e.push(t)}if(n=await Promise.race(e),!n)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(a=e)}if(!n)throw new e("no-response",{url:t.url,error:a});return n}}s(612);const V="www.google-analytics.com",J="www.googletagmanager.com",z=/^\/(\w+\/)?collect/,X=e=>{const t=({url:e})=>e.hostname===V&&z.test(e.pathname),s=new G({plugins:[e]});return[new O(t,s,"GET"),new O(t,s,"POST")]},Y=e=>{const t=new Q({cacheName:e});return new O((({url:e})=>e.hostname===V&&"/analytics.js"===e.pathname),t,"GET")},Z=e=>{const t=new Q({cacheName:e});return new O((({url:e})=>e.hostname===J&&"/gtag/js"===e.pathname),t,"GET")},ee=e=>{const t=new Q({cacheName:e});return new O((({url:e})=>e.hostname===J&&"/gtm.js"===e.pathname),t,"GET")};s(895);class te{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class se{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new te(e)}}let ae;function ne(e){e.then((()=>{}))}function re(e,t){const s=t();return e.waitUntil(s),s}const ie={get googleAnalytics(){return L()},get precache(){return U()},get prefix(){return N.prefix},get runtime(){return I()},get suffix(){return N.suffix}};s(550);const ce="cache-entries",oe=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class he{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(ce,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),l(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=oe(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(ce,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(ce,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let a=await s.transaction(ce).store.index("timestamp").openCursor(null,"prev");const n=[];let r=0;for(;a;){const s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?n.push(a.value):r++),a=await a.continue()}const i=[];for(const e of n)await s.delete(ce,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+oe(e)}async getDb(){return this._db||(this._db=await f("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class ue{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new he(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,ne(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class le{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const n=this._isResponseDateFresh(a),r=this._getCacheExpiration(s);ne(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return n?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),B.add(t))}_getCacheExpiration(t){if(t===I())throw new e("expire-custom-caches-only");let s=this._cacheExpirations.get(t);return s||(s=new ue(t,this._config),this._cacheExpirations.set(t,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function de(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:a}=t;if(!a)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}s(977);class fe{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class pe{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}class me extends ${constructor(e={}){e.cacheName=U(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(me.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=n.integrity,r=t.integrity,i=!r||r===e;a=await s.fetch(new Request(t,{integrity:r||e})),e&&i&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,a.clone()))}return a}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(t);if(!await s.cachePut(t,a.clone()))throw new e("bad-precaching-response",{url:t.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==me.copyRedirectedCacheableResponsesPlugin&&(a===me.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(me.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}me.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},me.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let a=null;if(t.url&&(a=new URL(t.url).origin),a!==self.location.origin)throw new e("cross-origin-copy-response",{origin:a});const n=t.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(r):r,c=function(){if(void 0===ae){const e=new Response("");if("body"in e)try{new Response(e.body),ae=!0}catch(e){ae=!1}ae=!1}return ae}()?n.body:await n.blob();return new Response(c,i)}(t):t};class we{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new me({cacheName:U(e),plugins:[...t,new pe({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const a of t){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:t,url:n}=de(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:t});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==a.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(t,a.integrity)}if(this._urlsToCacheKeys.set(n,t),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return re(e,(async()=>{const t=new fe;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return re(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let ge;const ye=()=>(ge||(ge=new we),ge);class _e extends O{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}let be;const qe=()=>(be||(be=new A,be.addFetchListener(),be.addCacheListener()),be);function ve(t,s,a){let n;if("string"==typeof t){const e=new URL(t,location.href);n=new O((({url:t})=>t.href===e.href),s,a)}else if(t instanceof RegExp)n=new _e(t,s,a);else if("function"==typeof t)n=new O(t,s,a);else{if(!(t instanceof O))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=t}return qe().registerRoute(n),n}class Re extends O{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(n);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function xe(e){return ye().matchPrecache(e)}class Ee extends ${async _handle(t,s){let a,n=await s.cacheMatch(t);if(n);else try{n=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}if(!n)throw new e("no-response",{url:t.url,error:a});return n}}class De extends ${constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(K)}async _handle(t,s){const a=s.fetchAndCachePut(t).catch((()=>{}));let n,r=await s.cacheMatch(t);if(r);else try{r=await a}catch(e){e instanceof Error&&(n=e)}if(!r)throw new e("no-response",{url:t.url,error:n});return r}}var Ce,ke,Te;self.addEventListener("activate",(e=>{e.waitUntil(async function(){const e=await caches.keys();await Promise.all(e.map((async e=>Object.values(ie).includes(e)?await Promise.resolve():await caches.delete(e))))}())})),self.addEventListener("activate",(()=>self.clients.claim())),Te={prefix:"maoudia",suffix:"v1",precache:"precache",runtime:"runtime",googleAnalytics:"ga"},(e=>{for(const t of Object.keys(N))e(t)})((e=>{"string"==typeof Te[e]&&(N[e]=Te[e])})),((e={})=>{const t=L(e.cacheName),s=new T("workbox-google-analytics",{maxRetentionTime:2880,onSync:(a=e,async({queue:e})=>{let t;for(;t=await e.shiftRequest();){const{request:s,timestamp:n}=t,r=new URL(s.url);try{const e="POST"===s.method?new URLSearchParams(await s.clone().text()):r.searchParams,t=n-(Number(e.get("qt"))||0),i=Date.now()-t;if(e.set("qt",String(i)),a.parameterOverrides)for(const t of Object.keys(a.parameterOverrides)){const s=a.parameterOverrides[t];e.set(t,s)}"function"==typeof a.hitFilter&&a.hitFilter.call(null,e),await fetch(new Request(r.origin+r.pathname,{body:e.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}}))}catch(s){throw await e.unshiftRequest(t),s}}})});var a;const n=[ee(t),Y(t),Z(t),...X(s)],r=new A;for(const e of n)r.registerRoute(e);r.addFetchListener()})({parameterOverrides:{cd1:"offline"}}),ke=[{'revision':'1e2313cd5f0cef06df48425579785b50','url':'404.html'},{'revision':'b899660f0e70a029c8b9a3bdf6ff8b37','url':'amp/offline/index.html'},{'revision':'9d0588f1f4c43e2f3ab2a8989e5616dd','url':'favicon.ico'},{'revision':'9f4f9e97a57e2285a6e50d5af32dbaca','url':'fr/amp/offline/index.html'},{'revision':'fe025684c8c144483447eff6d69dcb0f','url':'fr/offline/index.html'},{'revision':'5ff7c31b0406377db1fdb4ce54f24329','url':'images/offline/image-not-found.6975d304cc153ce2c557b07a68b82339f19fc88ca2376077469b2c951b25d20b.svg'},{'revision':'10371187d339680ae8701195f4664811','url':'index.html'},{'revision':'e11e115313fb5ff5f9feae6d3160fe2a','url':'offline/index.html'}],ye().precache(ke),function(e){const t=ye();ve(new Re(t,undefined))}(),Ce=new De,qe().setDefaultHandler(Ce),qe().setCatchHandler((async({event:e})=>{switch(e.request.destination){case"document":const t="/offline/index.html";return-1!==e.request.url.indexOf("/fr/")?xe(`/fr${t}`):xe(`${t}`);case"image":return xe("/images/offline/image-not-found.6975d304cc153ce2c557b07a68b82339f19fc88ca2376077469b2c951b25d20b.svg");default:return Response.error()}})),ve((({request:e})=>"navigate"===e.mode),new Q({networkTimeoutSeconds:5,cacheName:"maoudia-pages-cache-v1",plugins:[new se({statuses:[0,200]}),new le({maxEntries:100,maxAgeSeconds:86400,purgeOnQuotaError:!0})]})),ve((({request:e})=>"style"===e.destination&&-1===e.url.indexOf(".woff")||"script"===e.destination||"worker"===e.destination),new De({cacheName:"maoudia-static-cache-v1",plugins:[new se({statuses:[0,200]}),new le({maxEntries:50,maxAgeSeconds:86400})]})),ve((({request:e})=>"image"===e.destination),new Ee({cacheName:"maoudia-image-cache-v1",plugins:[new le({maxEntries:300,maxAgeSeconds:15724800})]})),ve((({request:e})=>"style"===e.destination&&-1!==e.url.indexOf(".woff")||"font"===e.destination),new Ee({cacheName:"maoudia-font-cache-v1",plugins:[new se({statuses:[0,200]}),new le({maxEntries:50,maxAgeSeconds:31536e3})]})),ve((({request:e})=>e.url.startsWith("https://github-readme-streak-stats.herokuapp.com")||e.url.startsWith("https://github-readme-stats.vercel.app")),new De({plugins:[new se({statuses:[0,200]})]})),ve("https://utteranc.es/client.js",new De({plugins:[new se({statuses:[0,200]})]})),ve("https://webmention.io",new De({plugins:[new se({statuses:[0,200]})]}))})()})();