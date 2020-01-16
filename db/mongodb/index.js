const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/badmovies");//makes connection

// const db = mongoose.connection;//makes connection

// db.on("error", console.error.bind(console, "Connection error:"));
// db.once("open", () => {
//   console.log("Connected to db...");
// });

movieSchema = mongoose.Schema({
  movie_id: Number,
  movie_name: String,
  popularity: Number,
  poster_path: String,
  movie_description: String,
  movie_year: String
});

Movie = mongoose.model("Movie", movieSchema);

module.exports.save = movie => {
  let newMovie = new Movie({
    movie_id: movie.id,
    movie_name: movie.title,
    popularity: movie.popularity,
    poster_path: movie.poster_path,
    movie_description: movie.overview,
    movie_year: movie.release_date
  });
  return newMovie.save();
};

module.exports.delete = movie => {
  return Movie.deleteOne({ movie_id: movie.movie_id }).exec();
};

module.exports.favorites = () => {
  return Movie.find().exec();
};
