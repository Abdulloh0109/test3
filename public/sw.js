if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bc230388bb5421754dcf87dd3cfda7a1"},{url:"/_next/static/472ke3LIA_gUqac21yHp0/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/472ke3LIA_gUqac21yHp0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/5a0a5f12-2a2415662c68aea5.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/769-d634f8a42e9bf2dc.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/885-d38750a14b35d996.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/app/addTopic/page-386431df4e4d2d67.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/app/editTopic/%5Bid%5D/page-06e051568216f2f7.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/app/layout-d22e045dcdd009bc.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/app/offline/page-23dee373eabe8912.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/app/page-0f35e273a04be11a.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/bce60fc1-f330208a48f279d5.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/main-661ddcdbb3026f1e.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/main-app-19d58edeaf0add84.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d1fb23ec2afb15b1.js",revision:"472ke3LIA_gUqac21yHp0"},{url:"/_next/static/css/fe252096f7a7c7fd.css",revision:"fe252096f7a7c7fd"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/icon-16x16.png",revision:"a0376be3f6582d2c67ce598a68d737f0"},{url:"/icons/icon-192x192.png",revision:"b26ab06cb6b91fa95879b2b2a4f1cf1f"},{url:"/icons/icon-32x32.png",revision:"bd15004d4597b8f7479c5fa060b3776e"},{url:"/icons/icon-512x512.png",revision:"ea7981b2311ab08333714445a283ad5e"},{url:"/icons/icon-apple.png",revision:"c16de28079249da691a929172d0aa6d0"},{url:"/icons/icon.ico",revision:"88bff52de40fc71fc1ba61853a15638f"},{url:"/manifest.json",revision:"82b1c4952099579e996c4fbbb520f606"},{url:"/service-worker.js",revision:"3e99c8e4d6af86b74af0f208e35eafd9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
