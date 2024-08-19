const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  label: { type: String, required: true },
  uri: { type: String, required: true },
  image: { type: String, required: true },
  source: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
