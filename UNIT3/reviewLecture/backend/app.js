const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/pets", (req, res, next) => {
    res.json("got all pets")
})

app.listen(PORT, () => console.log("listening"));