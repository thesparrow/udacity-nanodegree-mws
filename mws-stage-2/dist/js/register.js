"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(console.log("Service worker Registered!")).catch(e=>console.log("Error while registering service worker",e))});
//# sourceMappingURL=register.js.map
