-- \c todo_database;

INSERT INTO users(email) VALUES('corey'), ('jon'), ('jhenya');

INSERT INTO todos(body, author_id) 
VALUES
('exercise', 1),
('eat', 1),
('sleep', 2),
('code', 2);