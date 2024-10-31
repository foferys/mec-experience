const CACHE_NAME = 'mec-experience-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/spring.html',
  '/autumn.html', 
  '/winter.html',
  '/css/styles.css',
  '/css/stile.css',
  '/js/scripts.js',
  '/assets/logoMex-exwhite.png',
  // Aggiungi qui tutti gli altri asset che vuoi cachare
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