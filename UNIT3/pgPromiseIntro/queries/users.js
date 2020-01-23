const db = require('../db/index.js');

const getUsers = async (req, res, next) => {
    try {
        let users = await db.any("SELECT * FROM users");
        res.status(200).json({
            users, 
            status: "success",
            message: "All USERS"
        })
    } catch (err) {
        next(err)
    }
}

const getUser = async (req, res, next) => {
    try {
        let user = await db.one (
            "SELECT * FROM users WHERE id = $1 ", [ req.params.id ] 
        )
        res.status(200).json({
            user, 
            status: "success",
            message: "ONE USER RETREIVED"
        })
    } catch(err) {
        next(err);
    }
}

const createUser = async (req, res, next) => {
    try {
        let user = await db.one("INSERT INTO users (name, age) VALUES (${name}, ${age}) RETURNING *", req.body);
        res.status(200).json({
            user,
            message: "NEW USER CREATED",
            status: "success"
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { getUsers, getUser, createUser };

// Create a delete route for a user 
// Then create routes for pets . 
// newPet 
// get all pets 
// get all pets for one user 
