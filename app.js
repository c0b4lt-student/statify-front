const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('Pong from express js serv');
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
