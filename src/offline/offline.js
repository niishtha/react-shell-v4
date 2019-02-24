self.addEventListener('install', (event) => {
  console.log('I am installed');
})

self.addEventListener('fetch', (event) => {
  if (
    event.request.mode === 'navigate'
    || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))
  ) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(
          Array
            .from(urlsToCacheKeys.values())
            .find(v => v.match(/offline.*.html/))
        ))
    );
  }
});

self.addEventListener('message', function(event){
  console.log("SW Received Message: " + event.data);
});
