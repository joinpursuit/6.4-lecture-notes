
const listPeople = async () => {
    try {
        let res = await axios.get("http://localhost:3000/users");
        let users = res.data.users.reverse(); 
        let ul = document.querySelector("ul");
        ul.innerHTML = "";
        users.forEach(user => {
            let li = document.createElement("li");
            li.innerText = user.name;
            ul.appendChild(li)
        });
    } catch (error) {
        console.log(error);
    }
}

listPeople()

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let nameInput = document.querySelector('#nameInput');
    let ageInput = document.querySelector('#ageInput');
    await axios.post("http://localhost:3000/users", {name: nameInput.value, age: ageInput.value});
    nameInput.value = "";
    ageInput.value = "";
    listPeople();
})