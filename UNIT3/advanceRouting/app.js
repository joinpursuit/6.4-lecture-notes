const express =  require("express")
const cors =  require("cors");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users/users.js")
const postsRouter = require("./routes/posts/posts.js");

app.use("/users", usersRouter)
app.use("/posts",postsRouter)

// app.get("/users",  (req, res) => {
//     res.json("all users info");
// })
// app.get("/users/:id",  (req, res) => {
//     res.json("user " + req.params.id + " info");
// })


// app.delete("/users/:id", (req, res) => {
//     res.json("deleted user " + req.params.id)
// })

// app.post("/users", (req, res) => {
//     res.json("created a new user");
// })

// app.get("/posts", (req, res) => {
//     res.json("Returns all posts")
// })

// app.get("/posts/:id", (req, res) => {
//     res.json("Returns specific post")
// })

// app.get("/users/:id/posts", (req, res) => {
//     res.json("all posts for specific user");
// })

app.listen(port, () => "listeing");