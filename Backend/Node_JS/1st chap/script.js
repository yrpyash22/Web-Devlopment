
// Node.js

// node -v
// for version of node.js in your computer

// Use
// node
// > {_used_here}
// >console.log("");

// global   --> for documentary of node.js
// .exit   --> ecxit the compiler of node
// >.help     --> for helping 




//---------------------------------------------//
// Node Files
// node fileName.js
/*
console.log("Hello Node");

let n = 5;

for(let i=0; i<=n ; i++)
{
    console.log("Yuhu", i);
}

console.log("Good Bye");
*/



//------------------------------------------------------------------------//

// Process
// process.release
// process.cwd();
// process.argv

/*
console.log(process.argv);
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Lenovo\\Desktop\\BackEnd\\Node_JS\\script.js'
// ]

let args = process.argv;
for(let i = 0; i<args.length; i++)  // i = 2 for skip 2 array object
{
    console.log("Hello ", args[i]);
}
// C:\Users\Lenovo\Desktop\BackEnd\Node_JS>node script.js yash raj prajapati rjit usi akm
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Lenovo\\Desktop\\BackEnd\\Node_JS\\script.js',
//   'yash',
//   'raj',
//   'prajapati',
//   'rjit',
//   'usi',
//   'akm'
// ]
// Hello  C:\Program Files\nodejs\node.exe
// Hello  C:\Users\Lenovo\Desktop\BackEnd\Node_JS\script.js
// Hello  yash
// Hello  raj
// Hello  prajapati
// Hello  rjit
// Hello  usi
// Hello  akm
*/





//-----------------------------------------------//
//Modules Exports

// [1]   required file

// module.exports = {}    // for export from
// const Exp_val = require("./File"); 

/*
const someValue = require("./math");
console.log(someValue);
console.log(someValue.PT);
console.log(someValue.sum(15, 25));
*/

/*
const someValue = require("./math");
console.log(someValue.div(15,2));
console.log(someValue.sub(15,2));
*/

// [2]   required Directory (Folder)
// use index.js file is used for request a file from another directory
const info = require("./Fruits");
console.log(info);
console.log(info[0]);
console.log(info[0].name);