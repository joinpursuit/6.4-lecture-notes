const express = require('express');
const userPosts = express.Router({mergeParams: true})

userPosts.get("/", (req, res) => {
  res.json("all posts for specific user " + req.params.id);
});

module.exports = userPosts;