const mongoose = require('mongoose');
const { Schema } = mongoose;

const genresSchema = new Schema({
  id: { type: Number, required: true },
  name: String,
  localisation: Object,
});

const Genres = mongoose.models.Genres ||
  mongoose.model('Genres', genresSchema);

module.exports = Genres;
