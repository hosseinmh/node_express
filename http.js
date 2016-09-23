var http =require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":'text/plain'});
    console.log("req omad");
    if(req.method =='GET'){
        res.end('you send a get method ');
        console.log("send get request");
    }
    else if(req.method =='POST'){
        res.end('you send a post method');
        console.log("send post request");
    }
    else{
        res.end('you send other type ');
        console.log("send other request");
    }
});
server.listen('8000');
console.log('server on port 8000');