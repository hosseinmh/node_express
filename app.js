var fs =require('fs');


console.log(process.cwd());

var buffer = fs.readFileSync(process.cwd()+"\\info.txt");

console.log(buffer.toString());


var async_buffer = fs.readFile(process.cwd()+"\\info.txt",function(error,buff){
    
    if(error){
        console.log(error);
        console.log("somthing is wrong ");
    }
    else{
        console.log("the work is done ");
    }
        
});

fs.readFile(process.cwd()+"\\info.txt",function(error,data){
    if(error){
        console.log(error);
        console.log('we have some trouble ');
    }
    else{
        fs.writeFile(process.cwd()+"\\to.txt",data,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("we done it :))))");
            }
            
        });
    }
    
});
