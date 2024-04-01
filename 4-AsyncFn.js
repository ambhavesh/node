const { readFile, writeFile } = require("fs");
console.log("Starting the task...");
readFile("./content/demo.txt","utf8",(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result);
    }
});
writeFile("./content/demo-3.txt","File created by async function",(err,result)=>{
    if(err){
        console.log(err)
    }else{
        // console.log(result);
        console.log("Ending the task...");
    }
});
console.log("Completed...");