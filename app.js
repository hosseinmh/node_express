var http = require('http');
var path= require('path');
var fs = require('fs');
var url = require('url');

http.createServer(function(){
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(precess.cwd(),unescape(uri));
});