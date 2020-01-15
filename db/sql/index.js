const mysql = require("mysql");
const mysqlConfig = require("../../config.js").sql;

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

module.exports.favorites = () => {
  let sql = "SELECT * FROM thebadmovies";
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.save = movie => {
  let sql =
    "INSERT INTO thebadmovies(movie_id, movie_name, popularity, poster_path, movie_year) VALUES (?, ?, ?, ?, ?)";
  let dataArray = [
    movie.id,
    movie.title,
    movie.popularity,
    movie.poster_path,
    movie.release_date
  ];
  return new Promise((resolve, reject) => {
    connection.query(sql, dataArray, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.delete = movie => {
  let sql = `DELETE FROM thebadmovies WHERE movie_id = ${movie.movie_id}`;
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
