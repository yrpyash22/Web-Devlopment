
// _______________________  { Loops in JavaScript } ___________________________________//




// // Print the multiple table of 5
// for(let i=5; i<=50; i= i+5)
// {
//     console.log(i);
// }

/*let n = prompt("Enter number");
n = parseInt(n);
for(let i = n; i <= n*10; i = i+n)
{
    console.log(i);
}*/




//[PS- 1] Favourate movie
/*let movie = "Avengers";
let guess = prompt("Guess the movie!");
while ((guess != movie) && (guess != "quit")) {
    guess = prompt("Wrong guess please try again");
}
if (guess == movie) {
    console.log("Well done");
} else {
    console.log("Quit...");
}*/








// ToDo list 
/*let todo = [];
let req = prompt("Please enter your Request");

while(true)
{
    if(req == "quit")
    {
        console.log("Quiet App");
        break;
    }
    if(req == "list")
    {
        console.log("---------------");
        for(let i = 0; i<todo.length; i++)
        {
            console.log(i+1, todo[i]);
        }
        console.log("---------------");
    }
    else if(req == "add")
    {
        let task = prompt("Please enter your task you waant to add ");
        todo.push(task);
        console.log("Task added");
    }
    else if(req == "delete")
    {
        let idx = prompt("Please enter the task index ");
        todo.splice(idx, 1);
        console.log("Task Delete");
    }
    else {
        console.log("Wrong enter your Request");
    }
    req = prompt("Please enter your Request");
}*/




// [Q-1]
/*
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log(arr);
for(let i = 0; i<arr.length; i++){
    if(arr[i] == num)
    {
        arr.splice(i, 1);
    }
}
console.log(arr);
*/




// [Q-2]
/*
let numb = 287152;
let count = 0;
let copy = numb;
while(copy > 0 )
{
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);
*/





// [Q-3]
/*
let numb = 287152;
let sum = 0;
let copy = numb;
while(copy > 0 )
{
    let digit = copy % 10;
    sum = sum + digit; 
    copy = Math.floor(copy/10);
}
console.log(sum);*/





// [Q-4]
let n = 5;
let factorial = 1;
for(let i = 1; i<= n; i++)
{
    factorial = factorial * i;
}
console.log(`Factriol of ${n} is : ${factorial}`);





// [Q-5]
let arr = [2, 3, 5, 25, 36, 85, 1000, 4851, 154]
let largest = 0;

for(let i = 0; i<arr.length; i++){
    if(largest < arr[i])
    {
        largest = arr[i];
    }
}
console.log(largest);
