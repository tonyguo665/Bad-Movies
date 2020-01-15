//Select one db to work with:
//For SQL
const DB_mysql = require("../../db/sql");
//For Mongo
const DB_mongodb = require("../../db/mongodb");

module.exports = {
  mySQL: {
    save: movie => {
      return DB_mysql.save(movie);
    },

    delete: movie => {
      return DB_mysql.delete(movie);
    },

    favorites: () => {
      return DB_mysql.favorites();
    }
  },
  mongoDB: {
    save: movie => {
      return DB_mongodb.save(movie);
    },

    delete: movie => {
      return DB_mongodb.delete(movie);
    },

    favorites: () => {
      return DB_mongodb.favorites();
    }
  }
};
