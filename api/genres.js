const express = require('express');
const app = express();

const Genres = require('../models/genres.js');
const mongoose = require('mongoose');

// Retrieve all genres
app.get('/genres', async (req, res) => {
    try {
        const genres = await Genres.find();
        res.json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create new genre
app.post('/genres', async (req, res) => {
    const newGenre = req.body;
    try {
        const createGenre = await Genres.create(newGenre);
        res.status(201).json(createGenre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
