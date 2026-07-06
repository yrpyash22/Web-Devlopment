
// ___________________{ Method  .this ,  try-catch   ,  other }________________//


// Method 
/*
const calculater = {
    add: function(a, b)
    {
        return a+b;
    },
    sub: function(a, b)
    {
        return a-b;
    },
    mul: function(a, b)
    {
        return a*b;
    },
    div: function(a, b)  
    {
        return a/b;
    },

    mod:function(a,b)
    {
        return a % b;
    }
};
let a = 10;
let b = 52;
console.log(calculater.add(a,b));
console.log(calculater.div(a,b));
console.log(calculater.mod(a,b));
*/





// .this 
/*
const student = {
    name: "Shivani",
    age:25,
    eng: 90,
    math: 95,
    phy: 90,
    getvalue()
    {
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got the ${avg}`);
    }
}

student.getvalue();

function getvalue()
{
    console.log(this);
}
// console.log(this);
*/






/*
// try- catch
// let n = 15;
try{
    console.log(n);
}catch{
    console.log("Variable n is not defined");
}
*/



/*
// Arrow Function =>
const mul = (a,b) => {console.log(a*b)};
mul(15,6);

//setTimeout
setTimeout( () => {
    console.log("Apna College");
}, 4000);

//setInterval
let id = setInterval(()=>{
    console.log("Hello");
},2000);
//clearInterval(id);
*/



/*
// this with Arrow =>
const Student = {
    name: "Shivani",
    marks: 95,
    prop: this,     // Global Scope
    getName()
    {
        console,log(this);
        return this.name;
    },
    getMarks: () =>
    {
        console,log(this);
        return this.marks
    },
    getInfo : function()
    {
        setTimeout( () =>{
        console,log(this);
        },2000);
    },
    getInfo2: function()
    {
        setTimeout( function(){
            console,log(this);
        },2000);
    }
};
*/






// [Q-1]
/*
let arr = [10,10, 50, 50];
const arry_Average = (arr) =>{
    let add = 0;
    for(let i= 0; i<arr.length; i++)
    {
        add += arr[i];
    }
    return add/ (arr.length);
}
console.log(arry_Average(arr));
*/



/*
// [Q- 2]
let num = 4;
const isEven = (num) => { num % 2 == 0};
*/



// [Q-3]
/*
const object = {
    message:'Hello,World!',

    logMessage()
    {
        console.log(this.message);
    }
};

setTimeout( object.logMessage, 2000);
*/




// [Q-4]
let length = 4;
console.log(this.length);  //0
console.log(length);   //4

const object = {
    length: 5,
    method(callback)
    {
        console.log(this.length);  //5
        callback();
    },
};
function callback()
{
    console.log(this.length);  //0
}


object.method(callback);   
callback();  // 0
