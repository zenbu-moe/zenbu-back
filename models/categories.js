const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  id: { type: Number, required: true },
  name: String,
  localisation: Object,
});

const Categories = mongoose.models.Categories ||
  mongoose.model('Categories', categoriesSchema);

module.exports = Categories
