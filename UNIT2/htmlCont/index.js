document.addEventListener("DOMContentLoaded",() => {

    // alert("You are about to enter a Dangerous site")
    // let userAge = prompt("Enter Your age to continue");
    // debugger;
    // alert( "Your age plus 50 is: " + (Number(userAge) + 50));

    const isPrime = (num) => {
        if(num < 2) return false;
        if(num === 2) return true;
        for(let i = 2; i < num / 2; i++) {
            if(num % i === 0) return false; 
        }
        return true; 
    }
    // if(isPrime(Number(userAge))) {
    //     alert("Your age is prime")
    // } else {
    //     alert("Keep trying and getting older")
    // }
    let newName = prompt("What would you like your new name to be?")
    let header = document.getElementById("top")
    let header2 = document.querySelector("#top");
    
    header.innerText = newName;
    // Change the name at the top to be the new name?
})

