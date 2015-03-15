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
  	{ title : 'Home',
  	  testimonials : [
  	  	{ content: '\"Meg is the best in the world and this is why.\" - Professor McSmartyPants'},
  	  	{ content: '\"Meg is the best in the world and this is why.\" - Participant'},
  	  	{ content: '\"Planning workshops with Meg is one of my favorite things to do.\" - Kitty May'}
  	  ]}
  )
})
app.listen(3000)