const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewsSchema = new Schema({
  _type: { type: String, required: true },
  media_id: { type: Number, required: true },
  id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  short_comment: { type: String, required: true },
  content: { type: String, required: true },
  stats: {
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
  },
});

const Reviews = mongoose.models.Reviews ||
  mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
