var express = require('express');

var app= express();

app.get('/',function(req,res){
    res.send('<h1>we are usnig node js and express :)');
});

var server = app.listen('2000',function(){
    console.log('server is runnig ');
});