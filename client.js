var http =require('http');

var option ={
    hostname:"localhost" ,
    port:"8000"    ,
    method:"GET"    ,
    path:"/"    
};

var request = http.request(option,function(res){
    res.on("data", function(chunk){
       console.log(chunk) ;
    });
});