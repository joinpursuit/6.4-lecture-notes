-- schema is a visual representation of the DB and table 
-- connections.

-- Employees Table 
-- id Primary Key 
-- Title TEXT 
-- Start Date DATE 
-- Names TEXT 
-- Salary Integer 
-- Manager ID Foregin Key 

-- Design YELP 
-- Think about which tables you'd want or need  and 
-- how you'd connect them. 
DROP DATABASE IF EXISTS grovers_groomers;
CREATE DATABASE grovers_groomers;

\c grovers_groomers;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pets;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    age INTEGER
);

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name TEXT,
    species TEXT, 
    age INTEGER,
    owner_id INT REFERENCES users(id) ON DELETE SET NULL 
);

INSERT INTO users (name, age)
    VALUES ('corsky', 100), 
            ('jon', 26);

    INSERT INTO pets (name, species, age, owner_id)
        VALUES ('Noboru', 'Cat', 14, 1);

-- If parent gets deleted cascade will delete children. 
-- set to null will set the childrens parent id to null 

-- seed data is to add other data preset into the database
-- Good to add into it's own file 