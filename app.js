var fs =require('fs');


console.log(process.cwd());

var buffer = fs.readFileSync(process.cwd()+"\\info.txt");

console.log(buffer);
