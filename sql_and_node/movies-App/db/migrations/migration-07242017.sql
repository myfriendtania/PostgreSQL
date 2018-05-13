\c delorean_movies_dev

CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  year BIGINT,
  genre VARCHAR(255)
);