const movieModel = require("../models/movieModel.js");
const apiHelpers = require("../helpers/apiHelpers.js");
const desiredDB = "mongoDB";
//CHANGE DATABASES BY CHANGING THE desiredDB VARIABLE TO <mySQL, mongoDB>
module.exports = {
  getSearch: (req, res) => {
    console.log("GET-SEARCH requested!");
    apiHelpers
      .getMovies(req.body.genre_id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(`Error with getting movies of genre: `, req.body.genre_id);
      });
  },

  getGenres: (req, res) => {
    console.log("GET-GENRES requested!");
    apiHelpers
      .getGenres()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log("Error with getting genres!");
      });
  },

  getFavorites: (req, res) => {
    console.log("GET FAVORITES requested!");
    movieModel[desiredDB]
      .favorites()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log("Error with getting favorite movies!");
      });
  },

  saveMovie: (req, res) => {
    console.log("SAVE-MOVIE requested!");
    movieModel[desiredDB]
      .save(req.body)
      .then(data => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log("Error with saving a movie!");
      });
  },
  deleteMovie: (req, res) => {
    console.log("DELETE-MOVIE requested!");
    movieModel[desiredDB]
      .delete(req.body)
      .then(data => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log("Error with deleting a movie!");
      });
  }
};
