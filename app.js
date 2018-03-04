var express = require('express');
var mongodb = require('mongodb').MongoClient;
var app = express();
var PORT = process.env.PORT || 80;

// mongodb.connect('//mongodb://localhost:27017/CollegeProject');

app.get('/', function(req, res){
  // console.log(req);
  console.log(req.query);
  console.log(req.params);
  res.send('hello ');
});

app.get('/user', function(req, res){
  var user={
  	name: 'prince',
  	email: 'prince@gmail.com'
  };
  res.json(user);
});

app.post('/user', function(req, res){
  console.log('in post');
  console.log(req.body)
  res.send("success");
})

app.listen(PORT, function(){
  console.log('listening on PORT '+PORT);
});
