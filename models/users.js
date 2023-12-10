const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: { type: Number, required: true },
    name: String,
    description: String,
    likes: [{ type: Number, ref: 'Stats' }],
    dislikes: [{ type: Number, ref: 'Stats' }],
    favs: [{ type: Number, ref: 'Stats' }]
});

const Users = mongoose.models.Users ||
    mongoose.model('Users', userSchema);

module.exports = Users;
