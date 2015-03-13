var express = require('express')
var sassMiddleware = require('node-sass-middleware')
var path = require('path')

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/prefix'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('home', 
  	{ title : 'Home'}
  )
})
app.listen(3000)