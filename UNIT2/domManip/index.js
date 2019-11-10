const onlyOdds = () => {
    let output = ""
    let strElement = document.querySelector("#string")
    let str  = strElement.value ; 
    for(let i = 0; i < str.length; i++) {
        if(i % 2) {
            output += str[i]
        }
    }
    strElement.value = output; 
}


document.addEventListener("DOMContentLoaded", () => {

    let submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener("click", onlyOdds )
    
})