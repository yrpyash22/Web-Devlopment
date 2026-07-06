// let para1 = document.createElement('p');
// para1.innerText = "Hy i am red";
// document.querySelector('body').append(para1);
// para1.classList.add('red');



// let h3 = document.createElement('h3');
// h3.innerText = " Hey i am Blue";
// document.querySelector('body').append(h3);
// h3.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');


// document.querySelector('body').append(div);
// div.classList.add('box');

// h1.innerText = " Hey i am in div ";
// document.querySelector('div').append(h1);


// para2.innerText = " MEE too";
// document.querySelector('div').append(para2);












// [Q - 1]
let inp = document.createElement("input");
document.querySelector('body').append(inp);

let btn = document.createElement("button");
document.querySelector('body').append(btn);
btn.innerText = "click me";


// [Q - 2]
btn.setAttribute("id", "btn");
inp.setAttribute("placeholder", "username");


// [Q - 3]
let btn1 = document.querySelector('#btn');
btn1.classList.add("btnStyle");


// [ Q - 4]
let h1 = document.createElement('h1');
h1.innerHTML = "<u> DOM Practice </u>";
document.querySelector("body").append(h1);



// [ Q - 5]
let para3 = document.createElement('p');
para3.innerHTML = "Apna College <b> Delta </b> Practice";
document.querySelector("body").append(para3);