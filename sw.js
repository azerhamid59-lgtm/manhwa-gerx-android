self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('manhwa-gerx-cache').then((cache) => {
      return cache.addAll(['/manhwa_gerx/index.html']);
    })
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
