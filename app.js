var fs =require('fs');


console.log(process.cwd());

var buffer = fs.readFileSync(process.cwd()+"\\info.txt");

console.log(buffer.toString());


var async_buffer = fs.readFile(process.cwd(),function(error,buff){
    
    if(error){
        console.log(error);
        console.log("somthing is wrong ");
    }
    else{
        console.log("the weork is done ");
    }
        
});