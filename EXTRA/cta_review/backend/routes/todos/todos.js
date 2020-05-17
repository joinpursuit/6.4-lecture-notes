const todos = require('express').Router();
const {
  createTodo,
  fetchTodosForOneUser,
} = require("../../queries/todos/todos");

todos.post("/", createTodo)

todos.get("/:author_id", fetchTodosForOneUser)

module.exports = todos; 