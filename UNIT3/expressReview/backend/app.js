const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); 
const PORT = 3000; 

const carsRouter = require('./routes/cars/cars');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/cars', carsRouter);

app.listen(PORT, () => console.log("Listening"));