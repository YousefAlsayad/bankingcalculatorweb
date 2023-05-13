'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "21ba65463a248b2b8ab8aa41e7ad1a1c",
"index.html": "8e451a2edacb3adec93d9261bb324678",
"/": "8e451a2edacb3adec93d9261bb324678",
"main.dart.js": "7af7127397f9f02a4d59e10c1e3203bd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "139206b0cda51c17ff513375e8b6d876",
"assets/AssetManifest.json": "c09aa3ca5419ad825b8b8837aaa0d99f",
"assets/NOTICES": "03b9e3946b8413e665b60f89e1879681",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "08efad3c45e85d277224012e9c7fd105",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/hotaction.png": "5fe57085cdafb639601724b7b96a6162",
"assets/assets/images/newlogo.png": "d4b77f9e09bdbe309b3380560c1cc985",
"assets/assets/images/icon.png": "3c29b4db374c81604a7c6432469583a6",
"assets/assets/images/cashloan.png": "7756facbeea3daf9dacdd7359649dae2",
"assets/assets/images/shareyourresults.svg": "65d28f53fa92f8f4aab20debd40c6cd5",
"assets/assets/images/settings1.png": "02578e824eda3e460c67f07b2b57076e",
"assets/assets/images/dbr.png": "b78ac770cccbdb26b78e4d241cb5f9ad",
"assets/assets/images/infocenter.jpeg": "44967bdf27d7efed780bb93f4bb7fd19",
"assets/assets/images/newbcicon300.png": "b569301e5d6f6b8ed3c0159dbbf828df",
"assets/assets/images/fv.png": "f4bc25652fc28357df725c3b6e122d05",
"assets/assets/images/roi.png": "0a64707c942e50a5260c96c99d550d07",
"assets/assets/images/calculateyourloans.svg": "2ff0124bf27c6033abd97925c1db1943",
"assets/assets/images/investment.jpeg": "cae22acd1fa56b80fc6aae506950ec26",
"assets/assets/images/stocktrading.png": "115d68ea0083267ff14d387c4a167af3",
"assets/assets/images/vat.png": "8d8cf2f8784a82eb845af4ea17adbd5d",
"assets/assets/images/carloan.png": "b9491f47044d7598aed705963c9ec65a",
"assets/assets/images/earth.jpg": "146d98d060fd493832a4225da52ae839",
"assets/assets/images/planyourinvestment.svg": "522f5630ff4de3650f3e5881bb84181c",
"assets/assets/images/history.png": "b88d0853ffd093fd3fec4e9b0b944095",
"assets/assets/images/tax.png": "2031137936ee4fa491bb7d44c7a2de7d",
"assets/assets/images/finance.jpeg": "f364a63b97d1f0490b1a7e6d521bccd1",
"assets/assets/images/rate.png": "d874924fef52a186a850c2d92f76d4db",
"assets/assets/images/eligibility.png": "4d5b2613d9f8dc8e6cc6c5008e0ef8a0",
"assets/assets/images/pv.png": "155d0dfbf9132568e2db08666702719f",
"assets/assets/images/language.svg": "94d20e7ec9fcfdd805eee1a09b9bee58",
"assets/assets/images/cd.png": "85feec1d06643d613aa512849ffff35d",
"assets/assets/images/exchangemargin.png": "55f6a61506530d2ff4a3d57045bb0204",
"assets/assets/images/investment1.jpeg": "55fbdb6e0cc54b805291d9b78a65147d",
"assets/assets/images/homeloan.png": "554370748e36492bf5f0cf551bc4522a",
"assets/assets/images/predefined.jpg": "d855e282a06bf5b2cf6ab31faa4b8dd5",
"assets/assets/images/crown.png": "f886611d134e32393409e28f400a04a1",
"assets/assets/images/compare.png": "3b32ae2959623dec51b4f2acbe8f01cb",
"assets/assets/images/termdeposit.png": "4f0350aefe65e14d74baafe29032fe27",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".idea/vcs.xml": "f990e6d29e03715a04983dd2f51d3595",
".idea/workspace.xml": "9794faa676351b545ce9bba259b28f4c",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
