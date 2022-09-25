'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c000a70f873b699697c294b413ab38f5",
"index.html": "a468a3fdbb5cee41eb4442d200d35b5e",
"/": "a468a3fdbb5cee41eb4442d200d35b5e",
"main.dart.js": "ffc02019f58b26d05a6c2912931f120f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "139206b0cda51c17ff513375e8b6d876",
".git/config": "6699aed61b1c16f7b88924285e037e3a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/58/ee9fe6826823c51f68734e2ca52351b36a0381": "b3a93a46d666ea09b66b9574c3c55395",
".git/objects/93/ea5dd813fb0d6c8a746471199181c0e0700f2c": "41e7bd3461a9da5a59d017ebdb0bb7d6",
".git/objects/02/7db42a3e488d6ff9d14a503aabb72c566acff1": "2b1092d0405571ea25a7d092502e4bc1",
".git/objects/b2/8b7939ccaee192aa4800fad222487894305ee6": "7ebeff3607b0793f83d9fa18bc9b7f39",
".git/objects/b3/8c80cabefaa9d271496ff741a5712bf48955ab": "9a7cdb91a088a846349af385aaf4c5d3",
".git/objects/df/f0375f036f37be4215c1a0670f4224bbd96490": "588a6af4855ac5cb961452536d0e892d",
".git/objects/fc/85cdd4d18479133b410400dcd3f2499e52c863": "94b45981d4ec44c5ca420b57730b3509",
".git/objects/f5/f9106e6d99d98d327df2be337fdd8c8790694e": "f73771cd70f2b06f4218edadb9b7c29f",
".git/objects/ed/a1f8a904fb8c66c71f9545e717e078bab32be1": "2bd385199be72682369ee34d0d5dcc91",
".git/objects/c6/484925d60616423509a60b08196f0dffe2ae89": "e12e66f00788982f3650c02326517210",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/16/8230a00b53b7d65418476ac035720913565159": "c2f14ba34717b4b664f17605e5e556ca",
".git/objects/42/21a209a38928b3fe881897f487ef523c4a9684": "91d7b900d0d2635bcbaa606b17e22201",
".git/objects/87/15345c63aca100fadddf94a3d4a923962bfcaf": "4294b65f212d83eab9f0a917af8a4434",
".git/objects/7b/f20c4b9cc3218a7cab13a5a67c5b7f602aa191": "16562a069a538cc460e0c65332c465c8",
".git/objects/8f/5704b3673de5357513e2abc3db55cc1a1bfc2b": "a56ab0bdf3637c03be444954ac1502b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/d039541fb0b10eb7becc1ced2eded6df9b63d5": "45924eb8f3567de18544285a5bd10110",
".git/objects/81/66b17a2af21c58356fdcd1ddb38124a87c5e1d": "2bac5e5e44436401ababea206b9f4c34",
".git/objects/44/bb9915461a20cab8536d3daa6196944f936843": "e8ee1f2f55d2f4b621ff2e338ea0a343",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/0fef3691150b408f3c0fbe941d39430a33ea60": "124963be222aadda5f9730b824a6f65d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/06/d68d478a687da0091a4c2e6fcfae772db976d8": "a3a4d8a41f9cfd3d4128e3c3480a7f21",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/dd/91596825c22a1a77afe865312ed9118496b6ec": "020a6353aff4b09ad1e88633e3c99290",
".git/objects/dd/600d0c33c9d926c49336a67f9d75c7106917db": "e72286ab9b83390ff3b3ae2d69cabadd",
".git/objects/d5/33b096d935a48b7cb84097784005208b54f0a9": "a30d2444b5693ff9374691560dac7c95",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ef/60a5e1b2b1bc7c6e3910c7b06c0a406dd29542": "1908e7e784f9720075bd8d33069508d0",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/ceb5fd86f1c42908703c4932b3ca28068a54e0": "787cda166bb9b128f0d650cdad507834",
".git/objects/f0/ced6276d78fe6d3180c63df6f071883252bd06": "b25eaf4ab006bbc13182995b21411dcb",
".git/objects/e8/9c9101119c667e8ca46aa16fe692905a803ff2": "9d40fb32dba9f01591ff78dfe8c114f4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/2294c211613e19309b30c6ac7d0aa47a0f410f": "f230ea7c2528f847945e8963d336f6c9",
".git/objects/4f/83c566241be6e79d5283f407ee455586eed080": "661d16dd2160f602b86152d77b86580d",
".git/objects/12/b82bc2c6a28f46602be43efa7728ee7ca0d8aa": "171fafc34b16f879135a649996beeacd",
".git/objects/8c/ff1eb97b2afd44a16a9c42c81788d2daa84ffb": "b300c78890208cff44b067633835a7fc",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/8b/5a963b95499dfc207c7ce83285facfdc09a750": "066a8e8e96e58eadfeaef24c9811092a",
".git/objects/14/a43838a08f62fb3f72a39b59e81c33ba75e48f": "ec7c5c900bb777603c229711c932924e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "248ad4d884a8c4323050574c7106a368",
".git/logs/refs/heads/master": "248ad4d884a8c4323050574c7106a368",
".git/logs/refs/remotes/origin/master": "c91cb38b99867ada881c4680612b1b34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4838e26fc28e8492a161fb1d13899830",
".git/refs/remotes/origin/master": "4838e26fc28e8492a161fb1d13899830",
".git/index": "63bf036607169b2f934d40bf2a08ac4f",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "2e4e81e7930b8e9c5cf8e3016c3b7d35",
"assets/NOTICES": "9916cc0934896a3798e654bf2a06a915",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/hotaction.png": "5fe57085cdafb639601724b7b96a6162",
"assets/assets/images/newlogo.png": "d4b77f9e09bdbe309b3380560c1cc985",
"assets/assets/images/icon.png": "3c29b4db374c81604a7c6432469583a6",
"assets/assets/images/cashloan.png": "7756facbeea3daf9dacdd7359649dae2",
"assets/assets/images/settings1.png": "02578e824eda3e460c67f07b2b57076e",
"assets/assets/images/dbr.png": "b78ac770cccbdb26b78e4d241cb5f9ad",
"assets/assets/images/infocenter.jpeg": "44967bdf27d7efed780bb93f4bb7fd19",
"assets/assets/images/roi.png": "b87cd08fe69924f281d5656b5fb59e75",
"assets/assets/images/investment.jpeg": "cae22acd1fa56b80fc6aae506950ec26",
"assets/assets/images/carloan.png": "b9491f47044d7598aed705963c9ec65a",
"assets/assets/images/history.png": "b88d0853ffd093fd3fec4e9b0b944095",
"assets/assets/images/finance.jpeg": "f364a63b97d1f0490b1a7e6d521bccd1",
"assets/assets/images/rate.png": "d874924fef52a186a850c2d92f76d4db",
"assets/assets/images/cd.png": "85feec1d06643d613aa512849ffff35d",
"assets/assets/images/investment1.jpeg": "55fbdb6e0cc54b805291d9b78a65147d",
"assets/assets/images/homeloan.png": "554370748e36492bf5f0cf551bc4522a",
"assets/assets/images/predefined.jpg": "d855e282a06bf5b2cf6ab31faa4b8dd5",
"assets/assets/images/termdeposit.png": "4f0350aefe65e14d74baafe29032fe27",
"assets/assets/translations/en.json": "35487f9db7179d3c26a31aa278c5c141",
"assets/assets/translations/ar.json": "23aace9a914869774c3fa3987249fff0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
