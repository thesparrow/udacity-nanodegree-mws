const version = "0.6.10";
var cacheName =  `restaurant-menu-${version}`;
var contentImgsCache = 'restaurant-menu-imgs';
var allCaches = [
    cacheName,
    contentImgsCache
];

self.addEventListener('install', e => {
    const timeStamp = Date.now();
    e.waitUntil(
      caches.open(cacheName).then(cache => {
        return cache.addAll([
          `/`,
          `/index.html`,
          `/restaurant.html`,
          `/data/restaurants.json`,
          `/img/`,
          `/css/styles.css`,
          `/js/main.js`,
          `/js/dbhelper.js`,
          `/js/restaurant_info.js`
        ])
          .catch(error => {
            console.log("Caches open failed: " + error);
        });
      }));
  });

  self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
      })
    );
  });
  