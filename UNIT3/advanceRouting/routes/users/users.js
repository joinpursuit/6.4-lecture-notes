// const express = require('express');
const users = require('express').Router();
const userPosts = require('./posts/userPosts.js');

users.use("/:id/posts", userPosts)

users.get("/", (req, res) => {
    res.json("all users")
})

users.get("/:id", (req, res) => {
    res.json("info for user " + req.params.id);
})


users.delete("/:id", (req, res) => {
  res.json("deleted user " + req.params.id);
});

users.post("/", (req, res) => {
  res.json("created a new user");
});


module.exports = users;

