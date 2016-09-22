var express = require('express');

var app= express();

app.set('port',process.env.PORT||2000);

app.get('/',function(req,res){
    
   
    res.send(`
    <h1>welcome :)</h1>
    <p>we use express</p>

`);
    
});



app.get('/speakers',function(req,res){
    
    var info ='';
    dateFile.speakers.forEach(function(item){
       info+=`
        <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
        </li>
    `; 
    });
    
    
    res.send(`
    <h1>we are usnig node js and express :)</h1>
    ${info}
`);
    
});



app.get('/speakers/:speakersid',function(req,res){
    
    var speakers = dateFile.speakers[req.param.speakersid];
    res.send(`
    <h1>${speakers,title}</h1>
    <p>${speakers.name}</p>
    <p>${speakers.summary}</p>


`);
    
});


var dateFile =require('./data/data.json');


var server = app.listen(app.get('port'),function(){
    console.log('server is runnig on ' + app.get('port'));
});
