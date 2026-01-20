const CACHE_NAME = 'qr-lehuy-v1';
const urlsToCache = [
  './',
  'index.html',
  'theme.jpg',
  'banner.webp',
  'avatar.webp',
  'avt.png',
  '01.gif'
  // Thêm các file ảnh khác nếu có
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
      .then(response => response || fetch(event.request))
  );
});