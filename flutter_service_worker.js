'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "46c55fc0fe48c4c4fc64827eecd7219a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"assets/AssetManifest.json": "f7a5bd930ef1d7fe07b571eb66072da2",
"assets/assets/ig_logo.svg": "3faaddf43e4c4c3ade5d94e62ad9b645",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e9425b6848cbc6b062499a15baae92c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f943a7bb8dc0e9ab93b9ead4854eabd",
"/": "b6962d658237860e2c603506aed788c3",
"insta-x/.git/COMMIT_EDITMSG": "79a9eb81c0d9f74f88da56439774ab77",
"insta-x/.git/config": "e920d92fcb5ad572fa307d2bb2b8116b",
"insta-x/.git/description": "4e2a8e94074e25934546eb66c6835547",
"insta-x/.git/FETCH_HEAD": "806744592a962cd2582db584c018ce09",
"insta-x/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"insta-x/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"insta-x/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"insta-x/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"insta-x/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"insta-x/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"insta-x/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"insta-x/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"insta-x/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"insta-x/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"insta-x/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"insta-x/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"insta-x/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"insta-x/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"insta-x/.git/index": "cf63fe23df8d6066ec5d9461f998673f",
"insta-x/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"insta-x/.git/logs/HEAD": "aa91cbef932ec45a0ccee3b56f57205a",
"insta-x/.git/logs/refs/heads/main": "aa91cbef932ec45a0ccee3b56f57205a",
"insta-x/.git/logs/refs/heads/mainx": "b2731a2b96c3bd756dba5c5f76b2ce71",
"insta-x/.git/logs/refs/remotes/origin/main": "7548e1c80ab8c51adbcf579d340a6328",
"insta-x/.git/objects/01/51d201781d849feec0cfc715244d358351ac41": "259d791b58ca99f488c3ed573823b127",
"insta-x/.git/objects/08/13dc73feaa03857bf701ba405b0a2333e0c90e": "50d28eb4598923062dde6596765ec280",
"insta-x/.git/objects/18/7f34f6f0f82b12f45ebd177bfd288ccd06f484": "5871df85bca6175c1fbbff0e4106ca95",
"insta-x/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"insta-x/.git/objects/3f/447ce50e6e8fad3fbea17ee38de1a129e88919": "42c50de686a07f0527b54d8716bfd614",
"insta-x/.git/objects/43/f70af735d2613b55c0b4b34d3ffd874d67a2c9": "cae4d59f4eb4950f38f0bd623bca654a",
"insta-x/.git/objects/44/88a82fc5d4b5a34fb4d35e31746c087fcfdc09": "274582e73549b607943977fa1bda9418",
"insta-x/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"insta-x/.git/objects/52/df781cd66c34424cc922f6cf4416ee786062d1": "3b93753dd58406d110be3e6f87323889",
"insta-x/.git/objects/54/0d82e12a491cf402e09ebdf92a192767012dc6": "946ae401a5fdf0b5474b425cc9b8a3f9",
"insta-x/.git/objects/5f/a00f13a1e33e707d403106da571a4e5cec2486": "bb03a499324066c3c95bc548104594b5",
"insta-x/.git/objects/67/a965788e339c9015280e9b3672fe5050fcb653": "05ed0d1c824e8cfdb90ce9cf90f57165",
"insta-x/.git/objects/6d/d5c76c63eb63c2fffa5978b2d96897c6547566": "a4de6c4e06263e70b850179b685399cb",
"insta-x/.git/objects/72/168775e7822188d78022a334f5441299131607": "f419b2953ea513e9d4f6e0df54bf44d8",
"insta-x/.git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
"insta-x/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"insta-x/.git/objects/86/98ed9a5c88c4355357766c99f944431ccbdbcf": "18899dbcb8457bbb209cd86f0df79808",
"insta-x/.git/objects/88/3279c9ff90bec4f5acfdbfb84f8700154c1e82": "a343fc26440ecc567e633a34696f8ea2",
"insta-x/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"insta-x/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"insta-x/.git/objects/8b/9ae40bc2f7b85a2ad6ff1332ace6dff746f33d": "c3bfa4d29f86657090de981beb07dd0d",
"insta-x/.git/objects/99/856ab893f2d617b266093f3f772b526abadae1": "15d71096cbb20fe63e2596310f6c96e9",
"insta-x/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"insta-x/.git/objects/a2/5975dcc5a71eeb31f544c5a2e5336e9e96e559": "9aa0fa5081b366ba8b57bce7fd87ac0d",
"insta-x/.git/objects/a3/d616623590e5aea23235e3649207d192a46f84": "16b45473ee2cf8d16ad9a6b278822e1a",
"insta-x/.git/objects/a4/f36af82178825d184e104ad1fed6f422ab4cb0": "4d92412f4ae22602be9618658cf69a8c",
"insta-x/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"insta-x/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"insta-x/.git/objects/ad/7ec55102b9af4e9e82a7bba15de6be19bd965e": "d483821e7518451e89690ed8c93a9566",
"insta-x/.git/objects/b6/1a39b727f6c44db390b10f061177f650719dd4": "6a1d78b557a113eef8214887e7f57419",
"insta-x/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"insta-x/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"insta-x/.git/objects/be/88df28ae9a01da473a1afafa827f1a7eec2662": "2163f7a46743a17bf97ac0cc681c0aa9",
"insta-x/.git/objects/c2/a1b1237474e5b1e285f610248d66e0340997bd": "f9caa8abf6eb5ca8267c6ff589f3e15f",
"insta-x/.git/objects/c3/eb010f24b4208e22adff921f7365a1a19d018a": "87832e597850d7b75cec8453d6bdeef0",
"insta-x/.git/objects/c5/a6f46eb78631cc3c5257692ac4cfcefba4cf8e": "67ac5daec2151a8781a9c1ccbd4a47bf",
"insta-x/.git/objects/cb/70ea19faebe9b84fb455d41aa9a93ee0cbf5f0": "eac803c7d4f88c990d38d32ebabeee3b",
"insta-x/.git/objects/cf/61a81e577b02157f6b8adc76d1542f8b814747": "a366e4b09c3ce1a38db8b1f23b9ec900",
"insta-x/.git/objects/d5/64558598186a857de16f2c1a65352ff94a1a48": "01121931be28e312ab0e7064a8468819",
"insta-x/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"insta-x/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"insta-x/.git/objects/e1/47d9e6083b64a2235400b0b5d18cdb0b1de7b2": "5d468169b289b2ddf22e9f963100f27b",
"insta-x/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"insta-x/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"insta-x/.git/objects/ea/d9b37ff26c44e87c5365bd5a812e57943e1bfb": "d273198f046ead6fb75af69dec04fb29",
"insta-x/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"insta-x/.git/objects/f0/3b70a0e1316cf18a1cf6c9d6d6043b04f40b23": "5446c2f3a8a602a458126bdb880b2641",
"insta-x/.git/objects/f5/b58c0cb819f69165830cfdcf9b422433b88636": "4fbbb5c1974adb64de09adec3abffa89",
"insta-x/.git/objects/f7/7386b30dd6a082c9d7cd21efd255378c3136f9": "9d2f1e65a0fab4365e3c64d515740f3c",
"insta-x/.git/objects/ff/3edbee59a1e1cf6efaecc9cfa8d098412f42da": "afde929251d38644915fcf768a173e36",
"insta-x/.git/ORIG_HEAD": "7f08f932095d28389da28e2bce3fc700",
"insta-x/.git/refs/heads/main": "5375bbc74b22115420073c927c0aad82",
"insta-x/.git/refs/heads/mainx": "ad7c291942dd429a28e7a1b2412134e9",
"insta-x/.git/refs/remotes/origin/main": "5375bbc74b22115420073c927c0aad82",
"insta-x/assets/AssetManifest.json": "f7a5bd930ef1d7fe07b571eb66072da2",
"insta-x/assets/assets/ig_logo.svg": "3faaddf43e4c4c3ade5d94e62ad9b645",
"insta-x/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"insta-x/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"insta-x/assets/NOTICES": "06a45a8cd3e0dec8eeb726133c7dcff2",
"insta-x/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"insta-x/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"insta-x/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"insta-x/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"insta-x/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"insta-x/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"insta-x/index.html": "b6962d658237860e2c603506aed788c3",
"insta-x/main.dart.js": "d71d8384a36c049dc9e67b658b74ec47",
"insta-x/manifest.json": "52d9d52e8207ba4d9e78553616af9819",
"insta-x/README.md": "b3206c6a40ec573de78330538adba9d2",
"insta-x/version.json": "3db02ab6e0cb6002ac72bf3596db627e",
"main.dart.js": "04da183dcb285f6d88cd185e35be3efa",
"manifest.json": "52d9d52e8207ba4d9e78553616af9819",
"version.json": "3db02ab6e0cb6002ac72bf3596db627e"
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
