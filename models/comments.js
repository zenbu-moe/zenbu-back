const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = new Schema({
  _deleted: { type: Boolean, required: true },
  _edited: { type: Boolean, required: true },
  parent_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  message: { type: String, required: true },
  stats: {
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
  },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Comments = mongoose.models.Comments ||
  mongoose.model('Comments', commentsSchema);

module.exports = Comments;
