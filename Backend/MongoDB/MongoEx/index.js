const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


// Require class error
const ExpressError = require("./ExpressError.js");



main().then(() => { console.log("connection Successfull") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
}


/* // for Store data in database
let chat1 = new Chat({
    from: "Aman",
    to: "Vishal",
    msg: "Where are you going",
    create_at: new Date(),
});
chat1.save().then((res) => console.log(res));
*/


// Route
app.get("/", (req, res) => {
    res.send("Root is Working");
});


// Index Route  //-----------------------------------------// update
app.get("/chats", async (req, res, next) => {
    try {
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs", { chats });
    } catch (err) {
        next(err);
    }
});



// New Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "page not Found");
    res.render("new.ejs");
});


// Create Route  // --------------------------//
app.post("/chats", async (req, res, next) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            create_at: new Date(),
        });
        await newChat.save().then(res => console.log(res));
        res.redirect("/chats")
    } catch (err) {
        next(err);
    }
});

/*
//-------------------------------------------------------//
function asyncWrap(fn){
    return function (req, res, next){
        fn(req, res, next).catch((err) => next(err));
    };
}
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(500, "Chat not Found")); // It produced cast error so use try{}
        }
        res.render("edit.ejs", { chat });
}));
//--------------------------------------------------------//
*/



// --------------------------------------//
// NEW Show Route
app.get("/chats/:id", async (req, res, next) => {
    try {

        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(500, "Chat not Found")); // It produced cast error so use try{}
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
});

//---------------------------------------------//



// Edit Route
app.get("/chats/:id/edit", async (req, res, next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
});

// Update Route
app.put("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});



// Delete Route
app.delete("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});



// Validation Error handling
const handleValidationErr = (err) =>{
    console.log("This was a Validation err. Please Follow rules");
    console.dir(err.message);
    return err;
}
app.use((err, req, res, next) =>{
    console.log(err.name);
    if(err.name === "ValidationError")
    {
        err = handleValidationErr(err);
    }
    next(err);
});


// Error Handelling Middeleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occured" } = err;
    res.status(status).send(message);
});





app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});


// create the model 
