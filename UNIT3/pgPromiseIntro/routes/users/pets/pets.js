const usersPets = require("express").Router({mergeParams: true});
const { getPetByUser } = require("../../../queries/pets");

usersPets.get("/", getPetByUser)

module.exports = usersPets;