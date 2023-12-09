const express = require('express');
const app = express();

const Staff = require('../models/staff.js');
const mongoose = require('mongoose');

// Retrieve all characters
app.get('/staff', async (req, res) => {
    try {
        const characters = await Staff.find();
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Search for character
app.post('/staff/search', async (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const val = new RegExp(name, "i");
    try {
        const characters = await Staff.find(
            { _type: type, name: { $regex: val } }, {}, { limit: 5 }
        );
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Create new characters
app.post('/staff', async (req, res) => {
    const newCharacters = req.body;
    try {
        const createCharacter = await Staff.create(newCharacters);
        res.status(201).json(createCharacter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
