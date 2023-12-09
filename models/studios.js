const mongoose = require('mongoose');
const { Schema } = mongoose;

const studiosSchema = new Schema({
  id: { type: Number, required: true },
  names: String,
  description: String,
  employees: [{ type: Number, ref: 'Staff' }],
  image_url: String,
  links: [String],
});

const Studios = mongoose.models.Studios ||
  mongoose.model('Studios', studiosSchema);

module.exports = Studios;
