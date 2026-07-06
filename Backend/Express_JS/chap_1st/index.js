const express = require('express');
const app = express();

//console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`Server or app run on port ${port}`);
});

// Handling request
/*
app.use((req, res) =>{
    // console.log(req);
    console.log("Request resived");
});
*/

//Sending a Responce
/*
// we can see two objects
// 1 request
// 2 responce
// https request -> is text based
// express convet this in object form (Process is called parsing)
// use app.use((req,response) =>{
// responce.sens( __content___);
//    });
// Ex:- 
app.use((req, res) =>{
    //res.send("This is a basic responce"); // text on web page
    // res.send({           // objet => .json formate
    //     name: "apple",
    //     color: "red"
    // });
    res.send("<h1>Standard Gun</h1><ol><li>Akm</li><li>M416</li><li>Ump-45</li></ol>");
});
*/



// Rooting
/*
app.get("/apple", (req, res) =>{
    res.send({
        name: "apple",
        color: "Red" 
    });
});
app.get("/", (req, res) => {
    res.send("you contacted root path");
});
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});
app.get("/mango", (req, res) => {
    res.send("you contacted mango path");
});
// A default path for nor defined /path
app.get("*", (req, res) => {
    res.send("This path is not exist");
});
// A post request send 
app.post("/", (req, res) => {
    res.send("you send a post request");
});
*/


// Nodemon
// To automatically restart with code change
// Before using Nodemon it is installed as global or local


// Path Parameters
/*
app.get("/:username/:id", (req, res) => {
    console.log(req.params);  // [Object: null prototype] { username: 'apple', id: '125' }
    res.send("Hello, I am Root");
});


app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Welcone to page of @${username}`);
});
*/



// Query string
app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("No Searching query");
    }
    res.send(`These are the result for : ${q}`);
});
