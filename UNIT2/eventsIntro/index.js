document.addEventListener("DOMContentLoaded", () => {
    let person = {
        name: "",
        email: ""
    }
    let form = document.querySelector("form");
    form.addEventListener("change", (e) => {
        person[e.target.id] = e.target.value;  
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let h1 = document.createElement("h1");
        h1.innerText = person["name"] + " " + person.email;
        document.body.appendChild(h1);
    })
    let piano = document.querySelector("#piano");
    let ul = document.querySelector("ul");

    piano.addEventListener("click", (event) => {
        event.stopPropagation()
    })
    ul.addEventListener("click", (event) => {
        // debugger
    })

    document.addEventListener("click", (e) => {
        // debugger
    })

    let coords = document.createElement("div");
    coords.id = "coords";
    document.body.appendChild(coords);
    document.addEventListener("mousemove", (e) => {
        coords.innerText = `x: ${e.clientX}, y: ${e.clientY}`
    })
})

// Add a div with the id="coords".
//  Using document.addEventListener('mousemove', …), 
//  update the text of the div with the x and y coordinates of
//   the mouse cursor.`



 