// GLOBALS (Global variables) = No Window that means No DOM !!

// __dirname = path to current working directory
// __filename = file name
// require = function to use modules (CommonJS)
// module = info about current module (file)
// process = info about env where the program is being executed
console.log(__dirname);
const fname = "Bhavesh";
const lname = "Tiwary";
let age;
let num1;
let num2;

const callMe = (fname, lname, age) => {
    console.log({
        "FIRST_NAME": fname,
        "LAST_NAME": lname,
        "AGE": age
    });
};


function addNum(num1, num2) {
    console.log(`The sum is = ${num1 + num2}`)
}
addNum(77,7)
module.exports = { fname, lname, age, callMe, addNum };