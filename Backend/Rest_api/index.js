const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// require uuid package for unique id implements
// v4 mean version 4 of creating ids
const { v4: uuidv4} = require("uuid");
uuidv4();    // it make unique id => '1b9d6bcd-bbfd-etr-fdb1-fds14fdbgf'

// require methid-overrid package for patch form request
const methodOverride = require('method-override');
app.use(methodOverride("_method"));



// for determine content of url (post)
app.use(express.urlencoded({ extended: true}));

// For joint views directory through .ejs file
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// for joint public directory for extra use on style or scripting on html
app.use(express.static(path.join(__dirname, "public")));


// Create a temp data base
let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "yashraj",
        content: "this is a gaming console",
    },
    {
        id: uuidv4(),
        username: "saurabh",
        content: "hi may i help you",
    }
]


// connect html
app.get("/posts", (req, res) =>{
    res.render("index.ejs", {posts});
});

//Implement : POST /posts
// create route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// push in array by url content during post
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push( {id,username, content});
    // res.send("Post Request Working");
    // Redirect
    res.redirect("/posts");
});



// Show Route
// Implement: GET /posts/id
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});




// Implement : PATCH /posts/:id
//Updates route
app.patch("/posts/:id",(req, res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);  // updated post
    // Redirect
    res.redirect("/posts");
});

// Create form for Updates
// Edit Route
app.get("/posts/:id/edit", (req, res)=> {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});




// Implement : /post/:id
// Delete Route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});




app.listen(port, () =>{
    console.log(`Listening to Port ${port} `);
});