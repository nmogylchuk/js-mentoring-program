// const staticCacheName = 'static-cache-v0';
// const dynamicCacheName = 'dynamic-cache-v0';

// const staticAssets = [
//   './',
//   './public/index.html',
//   './public/offline.html',
//   './public/logo192.png',
//   './App.scss',
//   './main.js',
//   './index.js',
// ];

self.addEventListener('install', event => {
  // const cache = await caches.open(staticCacheName);
  // await cache.addAll(staticAssets);
  console.log('Service worker has been installed');
});

self.addEventListener('activate', event => {
  // const cachesKeys = await caches.keys();
  // const checkKeys = cachesKeys.map(async key => {
  //   if (![staticCacheName, dynamicCacheName].includes(key)) {
  //     await caches.delete(key);
  //   }
  // });
  // await Promise.all(checkKeys);
  console.log('Service worker has been activated');
});

self.addEventListener('fetch', event => {
  // console.log(`Trying to fetch ${event.request.url}`);
  // event.respondWith(checkCache(event.request));
  console.log('Service worker has been fetched');
});

// async function checkCache(req) {
//   const cachedResponse = await caches.match(req);
//   return cachedResponse || checkOnline(req);
// }

// async function checkOnline(req) {
//   const cache = await caches.open(dynamicCacheName);
//   try {
//     const res = await fetch(req);
//     await cache.put(req, res.clone());
//     return res;
//   } catch (error) {
//     const cachedRes = await cache.match(req);
//     if (cachedRes) {
//       return cachedRes;
//     } else if (req.url.indexOf('.html') !== -1) {
//       return caches.match('./offline.html');
//     } else {
//       return caches.match('./public/logo192.jpg');
//     }
//   }
// }
