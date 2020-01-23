const users = require("express").Router();
const { getUsers, getUser, createUser, deleteUser } = require("../../queries/users.js");
const usersPetsRouter = require("./pets/pets");

users.use("/:id/pets", usersPetsRouter);

users.get("/", getUsers);

users.get("/:id", getUser);

users.post("/", createUser)

users.delete("/:id", deleteUser)

module.exports = users;