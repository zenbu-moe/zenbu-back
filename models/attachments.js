const mongoose = require('mongoose');
const { Schema } = mongoose;

const attachmentsSchema = new Schema({
  _type: { type: String, required: true },
  url: { type: String, required: true },
  name: { type: String, required: true },
  author: [{ type: Number, ref: 'Staff' }],
  airing_at: Date,
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Attachments = mongoose.models.Attachments || 
  mongoose.model('Attachments', attachmentsSchema);

module.exports = Attachments;
