var http =require('http');

var server = http.createServer(function(req,res){
    res.writeHead('Content-Type':'text/plain')   ;
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
consol.log('server on port 8000');