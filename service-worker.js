const CACHE_NAME='goalie-stats-recorder-v1-24';
const FILES=['./','./index.html','./manifest.webmanifest','./assets/d_heat_map.png','./assets/goal_box_heat_map.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
