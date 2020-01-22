DROP DATABASE IF EXISTS company; 
CREATE DATABASE company; 

\c company;

DROP TABLE IF EXISTS employees; 

CREATE TABLE employees (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    manager_id INT REFERENCES employees(id) ON DELETE SET NULL 
);

INSERT INTO employees (name, manager_id)
    VALUES('Jess', NULL),
        ('Arthur', 1),
        ('Corey', 2),
        ('Alejo', 2);