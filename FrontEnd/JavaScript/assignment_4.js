
// _____________________________{ JavaScript Object }____________________________//
/*
const student = {
    name : "Yashraj",
    age: 21,
    marks: 84,
    city: "Gwalior"
};


// 
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
};
*/

/*
// Object of Object
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi",
        cast: "Hindu"
    },
    shyam: {
        grade: "A",
        city: "Agra",
        cast: "Hindu"
    },
    rohan: {
        grade: "B+",
        city: "Gwalior",
        cast: "Hindu"
    },
};
*/


// Array of Object
/*
const classInfo = [
    {
        name:"Aman",
        grade: "A+",
        city: "Delhi",
        cast: "Hindu"
    },
    {
        name: "Shyam",
        grade: "A",
        city: "Agra",
        cast: "Hindu"
    },
    {
        name: "Rohan",
        grade: "B+",
        city: "Gwalior",
        cast: "Hindu"
    },
];
*/




// Guessing game
/*
const max = prompt("Enter max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("ENter the guess number");
while(true)
{
    if(guess == "quit"){
        console.log("Quite the game");
        break;
    }
    if(guess == random)
    {
        console.log("You got the random number ", random);
        break;
    }else if(guess < random)
    {
        guess = prompt("your number is to small please try again");
    }else{
        guess = prompt("your number is too long please try again$");
    }
}
*/






// [Q- 1]
const side = 6;
const random = Math.floor(Math.random() * side) + 1;
let guess = prompt("Enter the guess number in dice");
console.log(guess);




// [Q-3]
const car = {
    name:"Fararri",
    model:"Sport",
    color: "White",
};
console.log(car.name);



// [Q-4]
const Person = {
    name: "Shivani",
    age: 20,
    city: "Gwalior",
};
Person.city = "New York";
Person.country = "United State";
console.log(Person);