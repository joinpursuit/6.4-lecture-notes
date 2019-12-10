document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let li = document.createElement("li");
        let input = document.querySelector("input");
        li.innerText = input.value; 
        let ul = document.querySelector("ul")
        ul.appendChild(li)
        input.value = ""
        let btn = document.createElement("button");
        btn.innerText = "X";
        li.appendChild(btn);

        btn.addEventListener("click", () => {
            ul.removeChild(li);
        })
    })
    
})