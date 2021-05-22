'use strict';

const express = require('express');
const bs = require('browser-sync');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req: any, res: any) => {
  res.send('1111\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
bs.init({
  // The hostname is the name of your service in docker-compose.yml.
  // The port is what's defined in your Dockerfile.
  proxy: "localhost:8080",
  notify: false,
  // Do not open browser on start
  open: false
})
