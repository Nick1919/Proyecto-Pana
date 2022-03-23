const CACHE_NAMES = [
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

const CACHE_VERSION = "V1";

self.addEventListener("install", (e_vent) => {
  e_vent.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      cache.addAll(CACHE_NAMES);
    })
  );
});

self.addEventListener('fetch', e_vent => {
    e_vent.respondWith(
    caches.match(e_vent.request).then(response => {
      if (response) {
        // ¡encontramos los archivos en la cache!
        return response
      }
      return fetch(e_vent.request)
    })
  )
})
