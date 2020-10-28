//Import
const { Schema, model } = require("mongoose");

//Movies Schema

const movieSchema = new Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  year: { type: String },
  rated: { type: String },
  plot: { type: String },
  imdbID: { type: String, required: true },
});

const Movie = model("movie", movieSchema);

// EXPORT MODEL
module.exports = Movie;

//TEST
