const express = require('express');
const posts = express.Router();


posts.get("/", (req, res) => {
  res.json("Returns all posts");
});

posts.get("/:id", (req, res) => {
  res.json("Returns specific post");
});

module.exports = posts; 