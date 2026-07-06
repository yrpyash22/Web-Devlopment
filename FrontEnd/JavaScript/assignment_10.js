


//  Eliment bubbling

// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("Div was select");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was select");
// });

// for(li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was select");
//     });
// }









// TOdo list app

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    console.log("button click 1");
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";


    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("del");
    item.appendChild(delBtn);
});



// Event Delegion

ul.addEventListener("click", function(event){
    console.log("button click 2");
    //console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let = listItem = event.target.parentElement;
        listItem.remove();
        console.log("Item deleted", listItem);
    }
})



// let delBtns = document.querySelectorAll(".del");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }