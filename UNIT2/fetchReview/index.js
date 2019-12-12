// Using the https://jsonplaceholder.typicode.com/
// API create a page where  all users have their names
// displayed in a select tag. When the user selects a user the 
// page should display a bulleted lists of all posts made by that user. 
// Do this using fetch and promise chaining. 
// Next update your code to use axios and promise chaining. 
// Finally update your code to use async and await. 
const fetchData = (url, callback) => {
    axios.get(url).then(res => {
        callback(res.data);
    })
    .catch(err => {
        console.log(err)
    })
}
// const fetchData = (url, callback) => {
//     fetch(url).then(res => {
//         if(!res.ok) {
//             throw Error(res)
//         }
//         return res.json()
//     }).then(res => {
//         callback(res);
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

const buildSelect = (users) => {
    let select = document.querySelector("select");
    users.forEach(user => {
        let option = document.createElement("option");
        option.innerText = user.name;
        option.value = user.id;
        select.appendChild(option);
    })
}

const buildPosts = (posts) => {
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    posts.forEach(post => {
        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h3.innerText = post.title; 
        p.innerText = post.body;
        li.appendChild(h3)
        li.appendChild(p)
        ul.appendChild(li)
    })
}

let select = document.querySelector("select");
select.addEventListener("change", (event) => {
    fetchData("https://jsonplaceholder.typicode.com/posts?userId=" + event.target.value, buildPosts);
})

fetchData("https://jsonplaceholder.typicode.com/users", buildSelect);