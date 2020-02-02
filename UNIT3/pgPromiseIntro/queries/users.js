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
            "SELECT * FROM users WHERE id = " + req.params.id  
        )
        let pets = await db.any("SELECT * FROM pets WHERE owner_id = $1", req.params.id);
        user.pets = pets; 
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
    // {name: 'corey', age: 100} req.body 
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

const deleteUser = async (req, res, next) => {
    try {
        await db.none("DELETE FROM users WHERE id= $1", req.params.id);
        res.status(200).json({
            status: "success",
            message: "USER was DELETED"
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { getUsers, getUser, createUser, deleteUser };

 
// newPet 
// get all pets for one user 


