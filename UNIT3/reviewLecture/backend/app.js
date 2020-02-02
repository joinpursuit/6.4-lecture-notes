const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;
const { getAllPets, addPetToShelter } = require("./middleware/shelter");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/pets", getAllPets);

app.post("/pets", addPetToShelter);

app.use((err, req, res, next) => {
    res.status(err.status).json(err);
})

app.listen(PORT, () => console.log("listening"));