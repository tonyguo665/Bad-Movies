DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

DROP TABLE IF EXISTS thebadmovies;

CREATE TABLE thebadmovies
(
    movie_id INT,
    movie_name VARCHAR(45) UNIQUE,
    popularity INT,
    poster_path VARCHAR(200),
    movie_description VARCHAR(500),
    movie_year VARCHAR(45)
)
