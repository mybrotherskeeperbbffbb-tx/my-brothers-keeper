// My Brother's Keeper - Service Worker
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
  "favicon.ico"
];

// Install service worker and cache everything
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Caching files...");
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached files if available
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Update cache when a new service worker activates
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Clearing old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
