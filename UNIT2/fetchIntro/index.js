document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/rndom").then(res => {
        if(res.ok === false) {
            throw Error(res.statusText + " was the error")
        }
        return res.json();
    }).then(res => {
        let img = document.createElement("img");
        img.src = res.message; 
        document.body.appendChild(img);
    }).catch(err => {
        debugger
    })
    
})

// studio ghibli api . 
// create html that has a button. When the button is clicked print
//  out a list of movie 
// titles. 