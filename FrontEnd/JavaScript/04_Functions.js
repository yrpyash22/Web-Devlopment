
//_________________ { Functions in JavaScript }__________________________//



/*
function hello()
{
    console.log("How are you");
}


let str = ["a" ,"b" ,"c", "d"];
function concat(str)
{
    let result = "";
    for(let i = 0; i<str.length; i++)
    {
        result += str[i];
    }
    return result;
}
*/




// Lexical    {Scope}
/*
let guess = "Hello";   // Global Scope
function change()
{
    let guess = "Namste";     
    console.log(guess);      // Function Scope
    function innerChange()
    {
        console.log(guess);   // Lexical Scope
    }
    
    innerChange();
}
console.log(guess);
change();
*/



// // Function expression 
// const sum = function(a, b){
//     return a+b;
// }
// // sum(5,10);



/*
// High Order Function
function multiply(func, n)
{
    for(let i = 1; i<=n; i++)
    {
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multiply(greet, 10);


// (2)
function oddEvenTest(request)
{
    if(request == "odd")
    {
        let odd = function(n)
        {
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request == "even")
    {
        let even = function(n)
        {
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Invalid Text");
    }
}

let request = "odd";  // even
*/








// [Q- 1]
/*
let arr = [15, 25, 65, 25, 4 ,3, 2, 15];
let num = 5;
function larger(arr, num){
    for(let i= 0; i< arr.length; i++){
        if( arr[i] > num)
        {
            console.log(arr[i]);
        }
    }
}
larger(arr, num);
*/





// [Q-2]
/*
let str = "abcdabcdefgggh";
function newfresh(str)
{
    let newstr = "";
    for(let i = 0; i<str.length; i++)
    {
        let currchar = str[i];
        if(newstr.indexOf(currchar) == -1)
        {
            newstr += str[i];
        }
    }
    console.log(newstr);
}
newfresh(str);
*/





// [Q- 3].
/*
let country = ["Australia","Germany","UnitedStatesofAmerica"];
function larg_counter_name(coountry)
{
    let ans = 0;
    for(let i =0; i<country.length; i++)
    {
        let prev = country[ans].length;
        let now = country[i].length;
        if(prev < now){
            ans = i;
        }
    }
    console.log(country[ans]);
}
larg_counter_name();
*/






// [Q- 4]
let str = "apnacollege"
function count_Voweles(str)
{
    let count = 0;
    for(let i = 0; i< str.length; i++ )
    {
        if( str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) =="i" || str.charAt(i) =="o" || str.charAt(i) =="u")
        {
            count++;
        }
    }
    return count;
}
let val = count_Voweles(str);
console.log(val);




// [Q- 5 ]
let start = 100;
let end = 200; 
function generate_Random(start , end)
{
    let diff = end-start; 
    return Math.floor(Math.random()*diff) + start;
}

console.log(generate_Random(start, end));
