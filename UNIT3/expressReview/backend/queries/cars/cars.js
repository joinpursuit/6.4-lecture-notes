const db = require('../../db/index');


const getAllCars = async (req, res, next) => {
    try {
        const cars = await db.any("SELECT * FROM cars");
        res.json({
            status: "success",
            message: "all cars",
            payload: cars 
        })
    } catch(err) {
        // next(err);
        res.json({
            status: "error",
            payload: null, 
            message: err
        })
    }
}

const createCar = async (req, res, next) => {
    try {    
        await db.none("INSERT INTO cars (brand, year) VALUES(${brand}, ${year})", req.body)
        res.json({
            status: "succss",
            message: "New car added"
        })
    } catch (err) {        
        res.json({
          status: "error",
          payload: null,
          message: err
        });
    }
}

module.exports = { getAllCars, createCar };