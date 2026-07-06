
// _______________________  { Arrays } ___________________________________//



// [Q-1]
/*let arr = [7 ,9, 0, -2, 2, 25, 14];
let n = 3;
for(let i = 0; i<n; i++)
{
    console.log(arr[i]);
}*/



// [Q-2]
/*let arr = [7 ,9, 0, -2, 2, 25, 14];
let n2 = 3;
let ans = arr.slice(arr.length-n2);
conaol.log(ans);
*/


// [Q-3]
/*let str = prompt("Please Enter a String");
if(str.length == 0)
{
    console.log("Blank");
}else{
    console.log("Not blank");
}*/




// [Q-4]
/*let str = "Yashraj";
let idx = 3;
if (str[idx] == str[idx].toLowerCase()) {
    console.log("Char is lowerCase");
}
else {
    console.log("Char is upperCase");
}
*/




// [Q-5]
/*let str = prompt("Enter a string");
console.log(`Original String =  ${str}`);
console.log(`String Without space =  ${str.trim()}`);
*/




// [Q-6]
let arr = ["hello", "hi", 20, 25, 26, 22, 65, 66 ];
let element = 66;
if(arr.indexOf(element) != -1)
{
    console.log("Element is exisst",arr.indexOf(element));
}
else{
    console.log("Element not exist");
}