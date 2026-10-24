

console.log("Assignment of JS 1");


// template liberls
//let a = 454, b = 256;
//console.log(`your payment id ${1254} of rupes ${a+b}`);



/*
// [Q-1] 
let num = 20;
if(num % 10 == 0){
    console.log("good");
}else{
    console.log("bad");
}
*/



/*
let x = confirm("How are you");
if(x){
    alert("happy");
}else{
    alert("Sad");
}
*/



/*
// [Q-2]
let var1 = prompt("Enter user name");
let var2 = prompt("Enter your age");
alert(` ${var1} is ${var2} year old`);
*/



/*
// [Q-3]
let quarter = 1;
switch(quarter){
    case 1: console.log("January, February , March");
    break;
    case 2: console.log("April ,May ,June");
    break;
    case 3: console.log("July ,August ,September");
    break;
    case 4: console.log("October , November , December");
    break;
    default : console.log(" invalid Quarter");
}
*/




/*
// [Q-4]
let str = "apples";
    if((str[0]=='a' || str[0]=='A') && (str.length > 5) )
    {
        console.log("golden string");
    }
    else
    {
        console.log("not a golden string");
    }
*/







// [ Q-5]
let a = 5;
let b = 15;
let c = 10;
if (a > b) {
    if (a > c) {
        console.log(a, "islargest");
    }
    else {
        console.log(c, "islargest");
    }
}
else {
    if (b > c) {
        console.log(b, "islargest");
    }
    else {
        console.log(c, "islargest");
    }
}






// [Q- 6]
let num1 = 32;
let num2 = 47852;
if ((num1 % 10) == (num2 % 10)) {
    console.log("number shave the same lastdigit which is", num1 % 10);
}
else {
    console.log("numbers don't have the same lastdigit");
}
