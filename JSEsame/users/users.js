var express = require ('express')
var router = express.Router()
var lib= require('compitojs')

router.get('/users', function(req,res){
  res.json(lib.getAllUsers())
})

router.get('/id', function(req,res){
  res.json(lib.getAllId())
})

router.post('/insertUser', function(req,res){
  res.json(lib.insertUser(req.params)
})

router.post('/insertPost', function(req,res){
  res.json(lib.insertPost(req.params))
})





module.exports= router;
