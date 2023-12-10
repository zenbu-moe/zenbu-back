const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  media_id: { type: Number, required: true },
  average: { type: Number, required: true },
  watched: {
    10: { type: Number, required: true },
    25: { type: Number, required: true },
    50: { type: Number, required: true },
    100: { type: Number, required: true },
    250: { type: Number, required: true },
  },
});

const Rating = mongoose.models.Rating ||
  mongoose.model('Rating', ratingSchema);

module.exports = Rating;
