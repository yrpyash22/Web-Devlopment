
//----------------------------- { JavaScript Single Threaded }--------------------------------//


//------------------------------- { Callback hell  }---------------------------------------//
/*
let h1 = document.querySelector("h1");
function changeColor(color, deley, nextColar)
{
    setTimeout( () =>{
        h1.style.color = color;
        if(nextColar) nextColar();
    }, 1000);
}

changeColor("red",1000, () =>{ 
    changeColor("yellow", 1000, () => {
        changeColor("green", 1000, () =>{
            changeColor("blue" , 1000);
        });
    });
});
*/



// [Example 2 ]
/*
function saveDB(data, success, failure)
{
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    if(internetSpeed > 4)
    {
        success();
    }else{
        failure();
    }
}
saveDB("Apna Colege", 
    ()=>{          // Succes data function call
            console.log("Success : your data is save");
            saveDB("Hello World", 
                ()=>{ 
                    console.log(" Data-2 Save Success ");
                    saveDB("Yashraj",
                        ()=>{ console.log(" Data-3 Save Success ")},
                        () => {console.log(" Data-3 Failure ")}
                    )
                },
                ()=>{ console.log(" Data-2 Failure");}
            );
        }, 
    ()=>{         // Fail data function call
        console.log("Failure : your data"); 
    }
);
*/



//-------------{ Promises }

function savetoDB(data) 
{
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve( "success: data was saved");
        } else {
            reject("Failure: weak connection");
        }
    });
}




/*
let request = savetoDB("Apna college");
request.then(()=>{
    console.log("Promise Resolve");
}).catch(()=>{
    console.log("Promise reject");
});
*/


// Promise Chaining  // Promise result or error
/*
savetoDB("Apna college")
.then((result)=>{
    console.log("Result", result);
    console.log("data-1 was save");
    return savetoDB("Hello World");
})
.then((result)=>{
    console.log("Result", result);
   console.log("data-2 was save");
   return savetoDB("Yashraj");
})
.then((result)=>{
    console.log("Result", result);
    console.log("data-3 was save");
})
.catch((error)=>{
    console.log("Error", error);
    console.log("Promise rejected");
});
*/


// [Example 2]
/*
let h1s = document.querySelectorAll("h1");
function changeColor(color, deley)
{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            for(h1 of h1s )
            {
                h1.style.color = color;
            }
            resolve("Color shanged !");
        },deley);
    });
    
}

changeColor("red",1000)
.then(()=>{
    console.log("red colour was completed");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("yellow colour was completed");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("green colour was completed");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("blue colour was completed");
    return changeColor("gray", 1000);
})
.then(()=>{
    console.log("gray colour was completed");
});
*/









//--------{ Aync Functions  ---//
//[1]    aync Keywords
/*
async function greet() {
    // throw "404 Not Found";
    return "Hello World";  // Return a Promise
}
greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("Result: ", result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error :  ", error);
});
*/



//[2]    { await Keyword }
/*
let h1s = document.querySelectorAll("h1");
function changeColor(color, deley)
{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            for(h1 of h1s )
            {h1.style.color = color;}
            resolve("Color shanged !");
        },deley);
    });
}
async function demo() {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("green", 1000);
    await changeColor("gray", 1000);
    await changeColor("brown", 1000);
    changeColor("blue",1000);
    return console.log("all color print");
}
demo();
*/




// Handling Rejection with Await
// using try-catch

let h1s = document.querySelectorAll("h1");
function changeColor(color, deley) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise Reject");
            }

            for (h1 of h1s) {
                h1.style.color = color;
            }
            console.log(`Colour Change to: ${color} `);
            resolve("Color shanged !");
        }, deley);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("yellow", 1000);
        await changeColor("green", 1000);
        await changeColor("gray", 1000);
        await changeColor("brown", 1000);
    }catch(err){
        console.log("Error caught");
        console.log(err);
    }
    // changeColor("blue", 1000);
}
demo();
