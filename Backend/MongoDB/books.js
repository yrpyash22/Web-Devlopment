// getting-started.js
const mongoose = require('mongoose');

main().then(() => {
    console.log("connection Successfully");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


// Create a Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    auther: {
        type: String,
    },
    price: {
        type: Number,
        // min: 1,
        min: [1, "Please enter a valid price"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    genre: [String],
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Math XI",
//     auther: "RD Sharma",
//     price: 1200,
// });

// let book1 = new Book({
//     title: "Chemistry XI",
//     auther: "RD bjss",
//     price: "122", // 122 is and "122" is also ok but "hudsvb" is wrong
// });


// let book1 = new Book({
//     title: "Marvel Comics",
//     price: 500,
//     category: "fiction",
//     genre: ["abc", "xyz", "lmn"],
// });



// update book content
// [options.runValidators] «Boolean» if true, runs update validators on this command. 
// Update validators validate the update operation against the model's schema
Book.findByIdAndUpdate("699ca82f198f9574dc4a179d", { price: -500 },  {runValidators: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });


// book1.save().then((res) => { console.log(res) });