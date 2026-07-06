const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// using EJS
app.set("view engine", "ejs");

app.get("/",(req, res) =>{
    res.render("home.ejs");
});


// View Directory
const path = require("path");
app.set("views", path.join(__dirname, "views"));





// Interpolation Syntex
// Interpolation refer to embedding expression into marked up text.
// ex=> `This is a ${name}` --> {name: any value}
// convert EJS to EJS dynamic



// Passing data to EJS
app.get("/rolldice", (req,res)=>{
    let num = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs", {num});
});



// Instagram EJS For Example of passing data
// create a basic template for instagram page based on folling route: /ig/:username
/*
app.get("/ig/:username", (req,res)=>{
    let { username } = req.params;
    const follwers = ["adam", "bob", "bro", "abc"];
    res.render("instagram.ejs", {username, follwers});
});
*/



// Conditional Statements in EJS
// Adding condtion inside EJS
// use in rolldice.ejs


// loop in EJS
// use in instagram.ejs





// Example 
app.get("/ig/:username", (req,res)=>{
    let { username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    // console.log(instadata);
    if(data)
    {
        console.log(data);
        res.render("instagram1.ejs", {data});
    }else
    {
        res.render("error.ejs", {data});
    }
});





// Serving Static Files
// app.use(express.static("public"));
// use as folder nanme 
// app.use(express.static(path.join(__dirname, "public")));

// Multiple files are serving
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));





// Includes 
// it is a templates of sub template. (common parts in all .ejs files are served in only one)
// <%- resolveInclude("includes/head.ejs"); %> 





