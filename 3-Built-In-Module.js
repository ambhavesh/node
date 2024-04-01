const os = require('os');
const path = require('path');
const fs = require("fs");
// const user = os.userInfo();
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem()
// };
// console.log(currentOS);
const base = path.basename("1-App.js")
const absolutePath = path.resolve(__dirname,'1-App.js');
console.log(absolutePath);
const rf= fs.readFileSync("./content/demo.txt","utf8");
// console.log(rf);
const wf = fs.writeFileSync("./content/demo-2.txt","File created by method");