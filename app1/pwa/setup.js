/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  console.log("Registering sw");
  navigator.serviceWorker.register('/apps/sber/mobin/pwa/service-worker.js', { scope: '/apps/sber/mobin/' }).then(function (registration)
        {
          console.log('Service worker registered successfully');
        }).catch(function (e)
        {
          console.error('Error during service worker registration:', e);
        });
}
else console.log("no sw support");
