document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        axios.get("http://localhost:3000/people").then(res => {
            let ul = document.querySelector("ul");
            res.data.forEach(person => {
                let li = document.createElement("li");
                li.innerText = person.name;
                ul.appendChild(li)
            })
        })
    })

    let select = document.querySelector("select");
    select.addEventListener("change", (e) => {
        let url = "http://localhost:3000/" + e.target.value;
        axios.get(url).then(res => {
            let ul = document.querySelector("ul");
            ul.innerHTML = "";
            res.data.forEach(el => {
            let li = document.createElement("li");
            li.innerText = el.name;
            ul.appendChild(li);
            });
         });
    })


})

// Create a list of cats in your backend. 
// ON the frontend there should be a select bar
// Client should select either cats or people and 
// see the appropriate list