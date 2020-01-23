DROP DATABASE IF EXISTS grovers_groomers;
CREATE DATABASE grovers_groomers;

\c grovers_groomers;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pets;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    age INTEGER
);

CREATE TABLE pets
(
    id SERIAL PRIMARY KEY,
    name TEXT,
    species TEXT,
    age INTEGER,
    owner_id INT REFERENCES users(id) ON DELETE SET NULL
);

INSERT INTO users
    (name, age)
VALUES
    ('corsky', 100),
    ('jon', 26),
    ('jhenya', 21),
    ('celine', 29),
    ('jerry', 69);

INSERT INTO pets
    (name, species, age, owner_id)
VALUES
    ('Noboru', 'Cat', 14, 1),
    ('Hatchi', 'Cat', 10, 1),
    ('Snowball', 'Cat', 12, 3),
    ('Gruffy', 'Dog', 6, 2),
    ('Coco', 'Dog', 3, 5),
    ('Rosco', 'Cat', 19, NULL);
