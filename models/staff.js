const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
  _type: { type: String, required: true },
  id: { type: Number, required: true },
  age: String,
  name: String,
  description: String,
  height: String,
  gender: String,
  birthday: Date,
  location: String,
  blood_type: String,
  image_url: String,
  links: [String],
});

const Staff = mongoose.models.Staff ||
  mongoose.model('Staff', staffSchema);

module.exports = Staff;
