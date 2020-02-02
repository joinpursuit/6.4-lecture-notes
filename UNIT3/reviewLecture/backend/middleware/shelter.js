let shelter = require("../database/db");


const getAllPets = (req, res, next) => {
  try {
    let pets = shelter.getAllPets();
    res.json({
      status: "success",
      message: "All Pets",
      pets
    });
  } catch (err) {
    next(err);
  }
};

const addPetToShelter = (req, res, next) => {
    try {
        let newPet = shelter.addPetToShelter(req.body);
        res.json({
            status: "success",
            message: `New Pet ${newPet.name} Was Added`,
            pet: newPet
        })
    } catch (err) {
        next(err);
    }
}

module.exports = { getAllPets, addPetToShelter };