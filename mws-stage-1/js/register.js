/* Make a direct call to the function*/
(function() {
/* Set up our service worker */

if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then(function(registration) {
        console.log('Service Worker Registered');
      });

    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
  }
})();
