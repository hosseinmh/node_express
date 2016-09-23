var http =require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":'text/plain'});
    if(req.method =='GET'){
        res.end('you send a get method ');
    }
    else if(req.method =='POST'){
        res.end('you send a post method');
    }
    else{
        res.end('you send other type ');
    }
}).listen('8000');
console.log('server on port 8000');