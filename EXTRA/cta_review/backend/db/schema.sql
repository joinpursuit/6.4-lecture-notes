-- DROP DATABASE IF EXISTS todo_database;
-- CREATE DATABASE todo_database;
-- \c todo_database;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    email VARCHAR UNIQUE
);

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY, 
    body VARCHAR, 
    author_id INT REFERENCES users(id) ON DELETE CASCADE, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);