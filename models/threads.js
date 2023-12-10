const mongoose = require('mongoose');
const { Schema } = mongoose;

const threadsSchema = new Schema({
  _spoiler: { type: Boolean, required: true },
  media_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  labels: [{ type: Number, ref: 'Categories' }],
  comments: [{ type: Number, ref: 'Comments' }],
  stats: {
    likes: { type: Number, required: true },
    comments: { type: Number, required: true },
  },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Threads = mongoose.models.Threads ||
  mongoose.model('Threads', threadsSchema);

module.exports = Threads;
