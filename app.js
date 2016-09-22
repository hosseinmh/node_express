var express = require('express');

var app= express();

app.set('port',process.env.PORT||2000);

app.get('/',function(req,res){
    
   
    res.send(`
    <h1welcome to learn node and express :)</h1>

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


var dateFile =require('./data/data.json');


var server = app.listen(app.get('port'),function(){
    console.log('server is runnig on ' + app.get('port'));
});
