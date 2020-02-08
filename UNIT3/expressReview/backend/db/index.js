const pgp = require("pg-promise")({});

const db = pgp("postgress://localhost:5432/car_lot");

module.exports = db; 