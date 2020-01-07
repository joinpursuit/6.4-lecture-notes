const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());
const port = 3000;

const people = {
    1: {name: "Corey", id: 1},
     2: {name: "Jhenya", id: 2}, 
     3: {name: "Jon", id: 3}
    }

app.get("/", (req, res) => {
    res.send("YOU made a get request at / url")
})

app.get("/people", (req, res) => {
    res.json(people)
})

app.get("/people/:id", (req, res) => {
    console.log(req.params);
    res.json(people[req.params.id])
})

app.post("/", (req, res) => {
    res.send("you made a POST request")
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
})