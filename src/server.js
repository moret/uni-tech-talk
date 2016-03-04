import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Hello from './app';
const app = express();

app.use(express.static('static'));

app.get('/api', (req, res) => {
  res.send('Johnny');
});

app.get('/', (req, res) => {
  http.get({
    host: 'localhost',
    port: 3000,
    path: '/api'
  }, apiResponse => {
    let user = '';
    apiResponse.on('data', d => {user += d});
    apiResponse.on('end', () => {
      const reactString = ReactDOMServer.renderToString(<Hello>{user}</Hello>);
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
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
