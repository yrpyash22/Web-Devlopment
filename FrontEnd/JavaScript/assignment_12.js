
// ---------------  API  ----------------------//




//  Accessing Data from JSON.

// // [1] JSON --> JS
// let jsonRes = '{"fact":"Ginger tabby cats can have freckles around their mouths and on their eyelids!","length":77}';
// let valid = JSON.parse(jsonRes);
// console.log(valid.fact);


// // [2] JS --> JSON
// let student = {
//     name: "Yashraj",
//     name2: "Shivani",
//     age: 21,
//     age: 20,
//     clg: "rjit",
// };
// let abc = JSON.stringify(student);
// console.log(abc);






// First Request to API

// fetch().
// let url = "https://catfact.ninja/fact";

// //fetch(url);    // it return a Promice
// fetch(url)
// .then((res) => {
//     console.log("Responce1 : " ,res);
//     return res.json();       // return a promise
// })
// .then((data1) => {
//     console.log(data1.fact);
//     return fetch(url);
// })
// .then((res) => {
//     console.log("Responce2 : " ,res);
//     return res.json();       // return a promise
// })
// .then((data2) => {
//     console.log(data2.fact);
// })
// .catch((err) =>{
//     console.log("error : " ,err);
// });

// console.log("Iam Happy maybe");




// Using fetch with async-await function
// let url = "https://cat-fact.herokuapp.com";
// async function getFacts() {
//     try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     }catch(e)
//     {
//         console.log(e);
//     }
// }




// Axios    --> Libarory to make http request
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log("Error ----> ", e);
//     }
// }




// Parctice Question 
/*
let h2 = document.querySelector("h2");
let p = document.querySelector('p');
let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
    let fact = await getFacts();

    p.innerText = fact;
});

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("Error ----> ", e);
        return "No Fact found";
    }
}
*/




// Axios using header
const url = "http://icanhazdadjoke.com/";
async function getJoke() {
    try{
        const confin = {
            headers: {accept: "application/json"}
        }
        let res = await axios.get(url,confin);
        console.log(res.data);
    }catch(e)
    {
        console.log(e);
    }
}







// Practice Question 
// updatin query string on url
