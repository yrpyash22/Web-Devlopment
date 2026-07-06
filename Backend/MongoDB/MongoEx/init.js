// For create a databsee

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {console.log("connection Successfull")})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
}

let chats = [
    {
        from: "Abhay",
        to: "Rohan",
        msg: "There is Konthing to do",
        create_at: new Date(),
    },
    {
        from: "Aniket",
        to: "shubh",
        msg: "How are You",
        create_at: new Date(),
    },
    {
        from: "Shivam",
        to: "Shubham",
        msg: "Hi bro ",
        create_at: new Date(),
    },
    {
        from: "Vinay",
        to: "Saurabh",
        msg: "chal be",
        create_at: new Date(),
    },
];

Chat.insertMany(chats);