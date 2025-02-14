//process.env.PWD = process.cwd();
//app.use(express.static(process.env.PWD, 'public'));

var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/bower_components'));

//process.env.PWD = process.cwd();
//app.set('views', path.join(process.env.PWD, 'public'));
//app.use(express.static(path.join(process.env.PWD, 'public')));

app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// routes
app.get('/', function (req, res) {

  res.render('index', {
    tittle: 'Homepage',
    message: 'Homepage'
  });
});

app.get('/albums', function (req, res) {

  res.render('albums', {
    tittle: 'Albums Page',
    message: 'My Albums'
  });
});

app.get('/about', function (req, res) {

  res.render('about', {
    tittle: 'About Page',
    message: 'About GG Team'
  });
});

app.get('/blog', function (req, res) {

  res.render('blog', {
    tittle: 'Blog Page',
    message: 'Blog'
  });
});

app.get('/blog1', function (req, res) {

  res.render('blog1', {
    tittle: 'Blog1 Page',
    message: 'Blog 1'
  });
});

app.get('/blog2', function (req, res) {

  res.render('blog2', {
    tittle: 'Blog2 Page',
    message: 'Blog 2'
  });
});

app.get('/catphoto', function (req, res) {

  res.render('catphoto', {
    tittle: 'Catphoto Page',
    message: 'Cat Photos'
  });
});

app.get('/dogphoto', function (req, res) {

  res.render('dogphoto', {
    tittle: 'Dogphoto Page',
    message: 'Dog Photos'
  });
});

app.get('/hamsterphoto', function (req, res) {

  res.render('hamsterphoto', {
    tittle: 'Hamsterphoto Page',
    message: 'Hamster Photos'
  });
});

// start server
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
