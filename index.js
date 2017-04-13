var express = require('express');
var app = express();

// routes
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// start server
var port=3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
