var express = require('express');

var app= express();

app.get('/',function(req,res){
    res.send('<h1>we are usnig node js and express :)');
});

app.set('port',process.env.PORT||2000);
var dateFile =require('./data/data.json');


var server = app.listen('2000',function(){
    console.log('server is runnig ');
});
