var express = require('express');

var server = express();

server.get('/',function(req,res){
    res.send('<h1>we are usnig node js and express :)');
});

