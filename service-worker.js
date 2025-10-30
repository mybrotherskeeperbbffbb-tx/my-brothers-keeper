// My Brother’s Keeper - Service Worker
const CACHE_NAME = "mbk-v1";
const urlsToCache = [
  "index.html",
  "about.html",
  "admin.html",
  "bios.html",
  "gallery.html",
  "chat.html",
  "background.jpg",
  "appbadge.png",
  "engine.mp3",
  "hum.mp3",
  "favicon.ico",
  "manifest.json"
];

// Install service worker and cache everything
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching MBK files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve from cache if available
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});
