// self.addEventListener('fetch', event => {
//     event.respondWith(
//       caches.open('my-app-cache').then(cache =>
//         cache.match(event.request).then(response => {
//           return (
//             response ||
//             fetch(event.request).then(fetchResponse => {
//               cache.put(event.request, fetchResponse.clone());
//               return fetchResponse;
//             })
//           );
//         })
//       )
//     );
//   });