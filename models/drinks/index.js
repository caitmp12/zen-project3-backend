//Import
const { Schema, model } = require("mongoose");

//Drinks Schema
const drinkSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  ingredients: [{ type: String }],
  directions: { type: String, require: true },
});

const Drink = model("drink", drinkSchema);

// EXPORT MODEL
module.exports = Drink;
