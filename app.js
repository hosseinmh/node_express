var http =require('http');


var server = http.createServer(function(request,respond) {
    respond.writeHead(200,{"Content-Type":"text/html"});
    respond.write('<h1>welcome to learning node js ');
    respond.end();
    
});
server.listen('2000',function(){
    console.log('server is runnig in port 2000');
});
