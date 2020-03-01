const pgp = require("pg-promise")({});

const db = pgp("postgress://localhost:5432/broken_project");

module.exports = db; 

