
// Service Worker for COzwei website
const CACHE_NAME = 'cozwei-cache-v1';
const urlsToCache = [
  '/',
  '/Pictures/cozwei.png',
  '/Pictures/pexels-tomfisk-9893729.jpg',
  '/Pictures/image copy 2.png',
  '/Pictures/Bild2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
  