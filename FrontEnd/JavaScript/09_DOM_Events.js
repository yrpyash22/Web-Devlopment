

// // Activity 
// let btn = document.querySelector("button");

// btn.addEventListener("click" , function() {
//     let random_colour = get_random_colour();
//     let h1 = document.querySelector('h1');
//     h1.innerText = random_colour;
//     h1.style.color = random_colour;

//     let div = document.querySelector('div');
//     div.style.backgroundColor  = random_colour;
//     console.log("Random colour updated");
// });

// function get_random_colour()
// {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let colour = `rgb( ${red}, ${green}, ${blue})`;
//     return colour;
// }






// // forms
// let form = document.querySelector('form');

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     console.dir(form);

//     let user = document.querySelector("#user");  
//     let pass = document.querySelector("#pass");
    
//     console.log(user.value);
//     console.log(pass.value);
// });









// // [ Q - 2]
// let btn = document.createElement('button');
// btn.innerText = "click me";
// document.querySelector("body").append(btn);
// btn.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "green";
//     setTimeout(() => {
//     event.target.style.backgroundColor = "";
//   }, 1000);
// });




// [ Q - 3]
let inp = document.createElement("input");
document.querySelector("body").append(inp);
inp.setAttribute("placeholder", "Enter your name");

let h2 = document.querySelector("h2");


inp.addEventListener("input", function(event){
    console.log(inp.value);
    h2.innerText = inp.value;
});





