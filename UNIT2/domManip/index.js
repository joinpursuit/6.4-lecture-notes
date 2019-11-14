import { node } from "prop-types";

// const onlyOdds = () => {
//     let output = ""
//     let strElement = document.querySelector("#string")
//     let str  = strElement.value ; 
//     for(let i = 0; i < str.length; i++) {
//         if(i % 2) {
//             output += str[i]
//         }
//     }
//     strElement.value = output; 
// }


document.addEventListener("DOMContentLoaded", () => {

    // let submitButton = document.querySelector("#submitButton");
    // submitButton.addEventListener("click", onlyOdds )
    // let input = document.querySelector("#string")
    // let fruitsCollection = document.querySelector("ul")
    // let fruits = document.querySelectorAll(".fruitItem")
    // let newLi = document.createElement("li");
    // newLi.innerText = "Strawberry"
    // fruitsCollection.appendChild(newLi)
    // debugger

    // create a fruits array. 
    // create a ul, 
    // iterate through the array and create a new li for each element. 
    // Attach it to the ul .
    // Add the ul to the body of your html. 
    let fruits = ["banan", "keiwi", "srawekljg"];
    let ul  = document.createElement("ul");
    fruits.forEach((fruit, idx) => {
        let li = document.createElement("li");
        li.id = idx; 
        li.innerText = fruit; 
        ul.appendChild(li);
    })
    document.body.appendChild(ul)
    
    let banana = document.querySelector("li")
    let orange = document.createElement("li");
    orange.innerText = "orange";

    // ul.removeChild(banana)
    // banana.parentNode.removeChild(banana)
    banana.parentNode.replaceChild(orange, banana)
    // debugger
    

})

