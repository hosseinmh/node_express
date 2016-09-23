var http = require('http');
var path= require('path');
var fs = require('fs');
var url = require('url');

http.createServer(function(){
    var uri = url.parse(req.url).pathname;
    
});