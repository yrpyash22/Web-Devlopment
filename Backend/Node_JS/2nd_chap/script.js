
// NPM (Node Package Manager)
// npm is used Standard package manager for Node.js
// Libarory and Packages   --> code
// Use => npm install <-Package_name-> 
//  => npm uninstall <-Package_name->

// Installing Packages
// the these files are automatic installed
// -> node_modules
// -> package-lock.json
// -> package.json

// now install figlet package
const figlet = require("figlet");
// uded as a packaghe function 
figlet("Hello Node", function(err, data){
    if(err)
    {
        console.log("Somthing went Wrong..");
        console.dir(err);
        return;
    }
    console.log(data);
});





// if we can delete File --> node_modeles   then no [problem]
// we can use--> npm install
// then it will recover

 

// Create Own Packege.json
// npm init

// Then They Told you
/*
Press ^C at any time to quit.
package name: (myproject)
version: (1.0.0)
description: This is First project
entry point: (index.js)
test command:
git repository:
keywords:
author: Yashraj Prajapati
license: (ISC)
type: (commonjs)
About to write to C:\Users\Lenovo\Desktop\BackEnd\Node_JS\2nd_chap\Myproject\package.json:
*/
// new package.json is created in your folder




// npm install
// local  npm install <-package_name->
// global  npm install -g <-package_name->
// npm link <-package_name->