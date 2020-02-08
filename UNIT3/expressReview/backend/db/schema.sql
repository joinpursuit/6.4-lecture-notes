DROP DATABASE IF EXISTS car_lot;
CREATE DATABASE car_lot; 

\c car_lot; 

DROP TABLE IF EXISTS cars; 

CREATE TABLE cars (
    id SERIAL PRIMARY KEY, 
    brand TEXT, 
    year INTEGER
);

INSERT INTO cars(brand, year)
VALUES
('Toyota', 1995), 
('Toyota', 1990), 
('Ford', 2005);