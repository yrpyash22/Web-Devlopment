// getting-started.js
const mongoose = require('mongoose');

main().then( () => {
    console.log("connection Successfully");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// Create schema
const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    age: Number
});

// Modal
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);





// INSERT 

// const user1 = new User( {
//     name: "Adam", 
//     email: "adam@yahoo.in",
//     age: 48
// });
// user1.save();
/*
const user1 = new User( {
    name: "Eve", 
    email: "eve@yahoo.in",
    age: 48
});
user1
    .save()
    .then((res) => { console.log(res);})
    .catch((err) => {console.log(err);});
*/
/*
User.insertMany([
    { name: "Tony", emali: "tony@gmail.com", age: 50},
    { name: "Bruce", emali: "bruce@gmail.com", age: 47},
    { name: "Peter", emali: "peter@gmail.com", age: 30},
]).then((res) => {
    console.log(res);
});
*/





// FIND 
/*
User.find({})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)});
    */

/*
User.find({age: {$lt: 47}})
    .then((res) => {console.log(res[0].name)})
    .catch((err) => {console.log(err)});
*/

// User.findOne( { age: {$gte: 47 } } ).then((data) =>{ console.log(data); });

// User.findById({_id: "6991f3692a5ef46dc19f25a5"} )
//     .then((res) => {console.log(res)})




// Update

// User.updateOne( {name: "Bruce"}, { age: 49}).then((res) => {
//     console.log(res);
// });

// User.updateMany( {age: {$gt: 45} }, { age: 49}).then((res) => {
//     console.log(res);
// });


// User.findOneAndUpdate( {name: "Tony"}, { age: 60}).then((res) => {
//     console.log(res);
// });

// User.findOneAndUpdate( {name: "Tony"}, { age: 600}, {new: true}).then((res) => {
//     console.log(res);
// });




// Delete
// User.deleteOne( {name: "Tony"}).then((res) => {
//     console.log(res);
// });

// User.deleteMany( { age: {$gt: 40}}).then((res) => {
//     console.log(res);
// });

// User.findByIdAndDelete( {_id: "6991f66c54a41b8be4bf936b"}).then((res) => {
//     console.log(res);
// });

User.findOneAndDelete( {name: "Peter"}).then((res) => {
    console.log(res);
});