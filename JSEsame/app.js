var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var users= require('./users/users')

app.use('/users', users)
app.listen(3001);
