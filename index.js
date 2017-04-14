var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.set('views', './views');
app.set('view engine', 'pug');

// routes
app.get('/pug', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// start server
var port=3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
