'use strict';

const express = require('express');
const PORT = 5000;
const HOST = '0.0.0.0';

const server = express();

server.get('/ping', (req, res) => {
  res.send('Pong from express js serv');
});

server.listen(PORT, HOST,() => {
  console.log("Server is running on port 5000");
});
