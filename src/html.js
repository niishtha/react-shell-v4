/* eslint-disable max-len */
export default () => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <title></title>
    </head>
    <body>
      <div id="root"></div>
      <script src="${__ASSETS__.runtime.js}"></script>
      <script src="${__ASSETS__.vendor.js}"></script>
      <script src="${__ASSETS__.main.js}"></script>
    </body>
  </html>
`;
