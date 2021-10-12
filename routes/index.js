var express = require('express')
var app = express()

app.get('/', function(req, res) {
	
	res.render('index', {title: 'Crudsito con NODE de: Diego VU-5IV8'})
})

module.exports = app;
