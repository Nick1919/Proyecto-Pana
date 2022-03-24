const CACHE_NAMES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./register.js",
  "./sw.js",
  "../src/App.jsx",
  "../src/index.js",
  "../src/components",
  "../src/scss",
  "../public",
  "../src",
];

const CACHE_VERSION = "V4";

self.addEventListener("install", (e_vent) => {
  e_vent.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      cache
        .addAll(CACHE_NAMES)
        .then(() => {
          self.skipWaiting();
        })
        .catch(console.log);
    })
  );
});

self.addEventListener("activate", (e_vent) => {
  const CacheWhiteList = [CACHE_NAMES];
  e_vent.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((value) => {
            return CacheWhiteList.indexOf(value) === -1 && caches.delete(value);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});


