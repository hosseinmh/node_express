var express = require('express');

var app= express();

app.set('port',process.env.PORT||2000);

app.get('/',function(req,res){
    res.send('<h1>we are usnig node js and express :)</h1>');
});


var dateFile =require('./data/data.json');


var server = app.listen(app.get('port'),function(){
    console.log('server is runnig on ' + app.get('port'));
});
