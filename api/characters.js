const express = require('express');
const app = express();

const Characters = require('../models/characters.js');
const mongoose = require('mongoose');

// Retrieve all characters
app.get('/characters', async (req, res) => {
    try {
        const characters = await Characters.find();
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Search for character
app.post('/characters/search', async (req, res) => {
    const name = req.body.name;
    const val = new RegExp(name, "i");
    try {
        const characters = await Characters.find(
            { name: { $regex: val} }, {}, { limit: 5 }
        );
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Create new characters
app.post('/characters', async (req, res) => {
    const newCharacters = req.body;
    try {
        const createCharacter = await Characters.create(newCharacters);
        res.status(201).json(createCharacter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
