//Import
const { Schema, model } = require("mongoose");

//Treats Schema

const treatSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  ingredients: [{ type: String }],
  directions: { type: String },
});

const Treat = model("treat", treatSchema);

// EXPORT MODEL
module.exports = Treat;

