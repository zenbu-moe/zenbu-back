const mediaSchema = require('./media.js').schema;
const charactersSchema = require('./characters.js').schema;
const commentsSchema = require('./comments.js').schema;
const attachmentsSchema = require('./attachments.js').schema;
const reviewsSchema = require('./reviews.js').schema;
const statsSchema = require('./stats.js').schema;
const ratingSchema = require('./rating.js').schema;
const staffSchema = require('./staff.js').schema;
const studiosSchema = require('./studios.js').schema;
const genresSchema = require('./genres.js').schema;
const categoriesSchema = require('./categories.js').schema;
const threadsSchema = require('./threads.js').schema;
const userSchema = require('./users.js').schema;

module.exports = {
    mediaSchema,
    charactersSchema,
    commentsSchema,
    attachmentsSchema,
    reviewsSchema,
    statsSchema,
    ratingSchema,
    staffSchema,
    studiosSchema,
    genresSchema,
    categoriesSchema,
    threadsSchema,
    userSchema,
  };
