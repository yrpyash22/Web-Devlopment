
//______________________{ Array Method }_________________________//


// [Q- 1]
/*
let arr = [1,2,4,8,5,4];
// square
let sqr = arr.map( (el) =>{
    return el*el;
});
console.log(sqr);
// sum
let sum = arr.reduce((red, el) =>  red + el);
console.log(sum);
// Average
let avg = sum/ arr.length;
console.log("Average is :",avg);
*/




//  [ Q - 2 ]
/*
let arr = [1,2,3,4,5,6,7,8,9,10];
let newarr = arr.map( (el) => el+5 );
console.log("Original element : ", arr);
console.log("New +5 element", newarr);
*/



// [ Q - 3]
/*
let str = ["adam","bob","catlyn","donald","eve"];
console.log(" Original string : ",str);
console.log( str.map( (el) => el.toUpperCase() ));
*/




// [Q - 4]
/*
const doubleAndReturnArgs = ( arr, ...args) => [ ...arr, ...args.map((v) => v*2 ) , ];

console.log(doubleAndReturnArgs( [1,2,3] , 4, 4 , 5 ,10));
console.log(doubleAndReturnArgs([2],10,4));
*/




// [ Q -5]
let mergeObjects = (obj1 , obj2) => ({ ...obj1, ...obj2 });
let src = mergeObjects( {a:1, b:2}, {c:3, d:4} );
console.log(src);