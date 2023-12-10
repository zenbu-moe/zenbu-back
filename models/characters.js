const mongoose = require('mongoose');
const { Schema } = mongoose;

const charactersSchema = new Schema({
    media_id: { type: Number, required: true },
    id: { type: Number, required: true },
    age: String,
    gender: String,
    birthday: Date,
    name: String,
    description: String,
    image_url: String,
    role: String,
    voice_actors: [
        {
            id: Number,
            role: String
        }
    ]
});

const Characters = mongoose.models.Characters ||
    mongoose.model('Chararacters', charactersSchema);

module.exports = Characters;
