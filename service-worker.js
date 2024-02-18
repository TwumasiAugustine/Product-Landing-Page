const CACHE_NAME = 'my-ecommerce-app-cache-v1';
const urlsToCache = [
	'/',
	'/index.html',
	'/manifest.json',
	'/icon-192x192.png',
	'/icon-512x512.png'
	// Add more URLs of static assets to cache here
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			if (response) {
				return response;
			}

			// Clone the request
			const fetchRequest = event.request.clone();

			// Make network request
			return fetch(fetchRequest).then((response) => {
				// Check if we received a valid response
				if (
					!response ||
					response.status !== 200 ||
					response.type !== 'basic'
				) {
					return response;
				}

				// Clone the response
				const responseToCache = response.clone();

				// Cache the fetched response
				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => {
						// Delete old caches if there are any
						return (
							cacheName.startsWith('my-ecommerce-app-cache-') &&
							cacheName !== CACHE_NAME
						);
					})
					.map((cacheName) => {
						return caches.delete(cacheName);
					})
			);
		})
	);
});
