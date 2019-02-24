/* eslint-disable max-len */
export default () => `
  <!doctype html>
  <html lang="en">
    <head>
      <title></title>
    </head>
    <body>
      <div id="root"></div>
      <script src="${__ASSETS__.runtime.js}"></script>
      <script src="${__ASSETS__.vendor.js}"></script>
      <script src="${__ASSETS__.main.js}"></script>
      <script>"serviceWorker" in window.navigator&&window.addEventListener("load",function(){window.navigator.serviceWorker.register("/serviceWorker.js").then(function(r){console.log("ServiceWorker registration successful with scope: ",r.scope)}).catch(function(e){console.error("ServiceWorker registration failed: ",e)})});</script>
    </body>
  </html>
`;
