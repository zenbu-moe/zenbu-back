// This is the entry point for the backend service application of zenbu.moe
// Written by @sigmacw_

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3069;

const media_api = require('./api/media.js');
const genres_api = require('./api/genres.js');
const characters_api = require('./api/characters.js');
const staff_api = require('./api/staff.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/zenbu', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Use the API routes
app.use('/', staff_api); // apiRoute.com/characters
app.use('/', characters_api); // apiRoute.com/characters
app.use('/', genres_api); // apiRoute.com/genres
app.use('/', media_api); // apiRoute.com/media


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
