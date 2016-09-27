var http = require('http');
var path= require('path');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(precess.cwd(),unescape(uri));
    console.log('loading ' +uri);
    var states;
    
    try{
        states= fs.lstatSync(fileName)    ;
    }
    catch(errrr){
        res.weiteHead(404 , {'Content-Type':'text/plain'}); 
    res.write('the page not founf 404 ');
    res.end();
    return;
    }
    
});