import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Hello from './app';
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  const reactString = ReactDOMServer.renderToString(<Hello>World</Hello>);
  res.send(
    `<!doctype html>
    <html lang='en-us'>
      <body>
        <div id='react-root'>${reactString}</div>
        <script src='/bundle.js'></script>
      </body>
    </html>`
  );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
