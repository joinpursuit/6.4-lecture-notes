const pets = require("express").Router();
const { getPets } = require("../../queries/pets");

pets.get("/", getPets)

module.exports = pets; 