const db = require("../../db/index");

const createTodo = async (req, res, next) => {
    // req.body.id = req.user.id ; I would only have this line if I was getting the users ID with an auth app. 
    try {
        await db.none(
            "INSERT INTO todos(body, author_id) VALUES(${body}, ${author_id})", 
            req.body
        )
        res.json({
            message: "New todo was created"
        })
    } catch (err) {
        next(err);
    }
}

const fetchTodosForOneUser = async (req, res, next) => {
    try {
        let todos = await db.any(
            "SELECT * FROM todos WHERE author_id = $1", req.params.author_id
        )
        res.json({
            todos, 
            message: "All todos for specified user"
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { createTodo, fetchTodosForOneUser };
