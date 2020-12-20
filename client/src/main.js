if ('serviceWorker' in navigator) {
  console.log('ServiceWorker start registering');
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceWorker.js').then(
      function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration);
      },
      function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}
