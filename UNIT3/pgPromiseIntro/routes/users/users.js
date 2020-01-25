const users = require("express").Router();
const { getUsers, getUser, createUser, deleteUser } = require("../../queries/users.js");
const usersPetsRouter = require("./pets/pets");

users.use("/:id/pets", usersPetsRouter);

users.get("/", getUsers);

users.get("/:id", getUser);

users.post("/", createUser)

users.delete("/:id", deleteUser)

module.exports = users;

// make a form that allows us to create new users . 
// Have a list that always shows all the names of the users. 
//Bonus make a link to a different page that shows all pets and allows us
// to create pets. Make it so you can link back and forth between pages. 