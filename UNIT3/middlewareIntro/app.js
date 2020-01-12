// MIDDLEWARE! 
// Functions to run between req and res
const express = require("express");
const cors = require("cors");

const port = 3000;

const app = express();
app.use(cors());

const middlewareA = (req, res, next) => {
    console.log("Middleware A has been fired");
    next();
}

const middlewareB = (req, res, next) => {
    console.log("Middleware B has been fired");
    next();
}

app.use(middlewareA);
app.use("/people", middlewareB)

app.get("/", (req, res) => {
    res.json("Hello world")
})

app.get("/people", (req, res) => {
    res.json("People route")
})
const changeIdToOne = (req, res, next) => {
    console.log(req.params);
    req.params.id = 1; 
    next()
}

app.get("/people/:id", changeIdToOne, (req, res) => {
    res.json("Info for " + req.params.id);
})

app.listen(port, () => console.log("Listing on port: ", port))


