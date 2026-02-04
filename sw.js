const CACHE_NAME = 'stashd-v1';
const urlsToCache = [
  '/snapledger-preview/',
  '/snapledger-preview/index.html',
  '/snapledger-preview/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
