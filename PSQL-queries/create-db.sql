DROP DATABASE IF EXISTS test_database;
CREATE DATABASE test_database;

\c test_database;

CREATE TABLE users(
  user_id serial PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO users(username, password)
VALUES('Hackerman', '12345678');
