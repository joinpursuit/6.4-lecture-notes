const carsRouter = require('express').Router();
const { getAllCars, createCar } = require("../../queries/cars/cars");

carsRouter.get("/", getAllCars)


carsRouter.post("/", createCar)

module.exports = carsRouter; 