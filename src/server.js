import express from 'express';
const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send(
    `<!doctype html>
    <html lang='en-us'>
      <body>
        <div id='react-root'>loading...</div>
        <script src='/bundle.js'></script>
      </body>
    </html>`
  );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
