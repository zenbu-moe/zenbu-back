const mongoose = require('mongoose');
const { Schema } = mongoose;

const statsSchema = new Schema({
  _type: { type: String, required: true },
  user_id: { type: Number, required: true },
  reference: {
    media_id: { type: Number, required: true },
    char_id: { type: Number, required: true },
    staff_id: { type: Number, required: true },
    user_id: { type: Number, required: true },
  },
  amount: Number,
});

const Stats = mongoose.models.Stats ||
  mongoose.model('Stats', statsSchema);

module.exports = Stats;
