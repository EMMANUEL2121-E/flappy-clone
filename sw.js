const CACHE_NAME = 'flappy-clone-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install event - Cache core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch event - Serve from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});