const db = require("../db/index");

const getPets = async (req, res, next) => {
    try {
        let pets = await db.any("SELECT * FROM pets")
        res.status(200).json({
            pets,
            status: "success",
            message: "ALL PETS"
        })
    } catch (err) {
        next(err)
    }
}

const getPetByUser = async (req, res, next) => {
    try {
       let pets = await db.any("SELECT * FROM pets wHERE owner_id = $1", req.params.id);
       res.status(200).json({
           pets, 
           status: "success",
           message: "All Pets for one user"
       })
    } catch (err) {
        next(err);
    }
}

module.exports = { getPets, getPetByUser };