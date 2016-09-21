var express = require('express');

var app= express();

app.get('/',function(req,res){
    res.send('<h1>we are usnig node js and express :)');
});

