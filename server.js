var express     = require('express')
var app         = express()
var bodyParser  = require('body-parser')

app.use(express.static('./public'))

// home page route
app.get('/', function(req,res){
    res.sendFile('./html/index.html', {root: './public'})
})

// food data page route
app.get('/food-data', function(req,res){
    res.sendFile('./html/food-data.html', {root: './public'})
})

// exercise data page route
app.get('/exercise-data', function(req,res){
    res.sendFile('./html/exercise-data.html', {root: './public'})
})

// check progress page route
app.get('/check-progress', function(req,res){
    res.sendFile('./html/check-progress.html', {root: './public'})
})

// about page route
app.get('/about', function(req,res){
    res.sendFile('./html/about.html', {root: './public'})
})

// contact page route
app.get('/contact', function(req,res){
    res.sendFile('./html/contact.html', {root: './public'})
})

// api test area route
app.get('/api-test', function(req,res){
    res.sendFile('./html/api-test.html', {root: './public'})
})

// 404 page
app.get('/404', function(req,res){
  res.sendFile('./html/404.html', {root: './public'})
})

// 404 error handling middleware
app.use(function(req, res, next){
  res.status(404)
  res.redirect('/404')
})

app.listen(8080)
