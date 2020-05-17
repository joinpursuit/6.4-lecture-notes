require("dotenv").config();

const pgp = require("pg-promise")({});

const db = pgp(process.env.DATABASE_URL);

module.exports = db; 