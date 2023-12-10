const mongoose = require('mongoose');
const { Schema } = mongoose;

const mediaSchema = new Schema({
  _private: Boolean, 
  _media_type: String, 
  _show_type: String, 
  status: String, 
  id: Number, 
  name: String, 
  short_name: String,
  description: String,
  localisation: Object,
  rating: String, 
  relations: [{ id: Number, relationName: String }],
  genres: [Number],
  characters: [Number],
  staff: [Number],
  reviews: [Number],
  episodes: {
    count: Number, 
    duration: Number, 
    names: [Number],
  },
  medias: [Number],
  stats: {
    favs: Number, 
    score: Number,
    watching: Number, 
    completed: Number, 
    planning: Number, 
    paused: Number, 
    dropped: Number, 
  },
  producers: [Number],
  studios: [Number],
  links: [String],
  threads: [Number],
  tags: [Number],
  started_at: Date, 
  finished_at: Date,
  created_at: Date, 
  updated_at: Date,
});

mediaSchema.virtual('studio', {
  ref: 'Studios',
  localField: 'studios',
  foreignField: 'id'
});

mediaSchema.set('toObject', { virtuals: true });
mediaSchema.set('toJSON', { virtuals: true });

const Media = mongoose.models.Media ||
  mongoose.model('Media', mediaSchema);

module.exports = Media;
