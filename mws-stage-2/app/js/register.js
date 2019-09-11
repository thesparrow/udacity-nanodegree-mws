
//ref:https://developers.google.com/web/fundamentals/primers/service-workers/
/**
*   Check if service worker is browser compatible. 
*   Register, and handle errors. 
*
**/
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/sw.js")
      .then(console.log("Service worker Registered!"))
      .catch(err => console.log("Error while registering service worker", err));
  });
}
