import * as serialize from 'serialize-javascript';

const template = ({ html, assets, state }: {html: string, assets: any, state: any}): string => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>2 Product Page - Server Side Rendering</title>
    <link rel="icon" href="data:;base64,=">
    <link rel="stylesheet" href="/static/${assets['main.css']}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <main id="root">${html}</main>
    <script>window.__PRELOADED_STATE__=${serialize(state)};</script>

    <script src="/static/${assets['manifest.js']}"></script>
    <script src="/static/${assets['main.js']}"></script>
  </body>
</html>
`;

export default template;
