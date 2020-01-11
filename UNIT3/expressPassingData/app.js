const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const port = 3000; 

const app = express();

let people = []

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/cats/:color/:size", (req, res) => {
    
    console.log(req.params)
    res.json({cat: req.params});
})

app.get("/dogs", (req, res)=> {
    console.log(req.query)
    res.json(req.query)
})
app.get("/people", (req, res) => {
    res.json(people)
})

app.post("/newUser", (req, res) => {
    console.log(req.body);
    people.push(req.body)  
    res.json({status: "success you add a person", person: req.body});
})

app.get("/ghibliFilms", async (req, res) => {
    try {
        let movies = await axios.get("https://ghibliapi.herokuapp.com/films");
        res.json({
            success: 200, 
            movies: movies.data
        })
        } catch(err) {
            // res.json({
            //     status: 500,
            //     error: err
            // })
            throw Error(err)
        }
})


// create an html page that takes in a name and age from a user
//and submits a form. On submit send back the data and add it
// to our people array. 

//when a user clicks a button that says reveal people. It will 
//list their names. 

app.listen(port, () => {
    console.log("Listing to port ", port);
})

