let form = document.querySelector("form");
let showUsers = document.querySelector("#showUsers");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    axios.post("http://localhost:3000/newUser", {name: name.value, age: age.value})
    name.value = ""
    age.value = ""
    //     .then(res => {
    //     debugger
    // })
})

showUsers.addEventListener("click" , () => {
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    axios.get("http://localhost:3000/people").then(res => {
        res.data.forEach(person => {
            let li = document.createElement("li");
            li.innerText = person.name; 
            ul.appendChild(li);
        })
    }).catch(err => {
        console.log(err);
        
    })
})




