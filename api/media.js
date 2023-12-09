const express = require('express');
const app = express();

const MediaModel = require('../models/media.js');
const mongoose = require('mongoose');

// Retrieve all media
app.get('/media', async (req, res) => {
    try {
        const media = await MediaModel.find();
        res.json(media);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Retrieve media by ID
app.get('/media/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const media = await MediaModel.find({ id: id });
        if (!media) {
            return res.status(404).json({ error: 'Media not found' });
        }
        res.json(media);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create new media
app.post('/media', async (req, res) => {
    const newMedia = req.body;
    try {
        const createdMedia = await MediaModel.create(newMedia);
        res.status(201).json(createdMedia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update media by ID
app.put('/media/:id', async (req, res) => {
    const { id } = req.params;
    const updatedMediaData = req.body;

    try {
        const updatedMedia = await MediaModel.findOneAndUpdate({ id: id }, updatedMediaData, { new: true });
        if (!updatedMedia) {
            return res.status(404).json({ error: 'Media not found' });
        }
        res.json(updatedMedia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete media by ID
app.delete('/media/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedMedia = await MediaModel.findOneAndDelete({ id: id });
        if (!deletedMedia) {
            return res.status(404).json({ error: 'Media not found' });
        }
        res.json(deletedMedia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Retrieve media for a specific category
app.get('/:category', async (req, res) => {
    const { category, id } = req.params;

    // Validate category
    if (!['anime', 'manga', 'light-novels'].includes(category)) {
        return res.status(400).json({ error: 'Invalid category' });
    }

    try {
        // Filter by category within the MediaModel
        const media = await MediaModel.find({ _media_type: category });
        if (!media) {
            return res.status(404).json({ error: 'Media not found' });
        }
        console.log(media);
        res.json(media);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Retrieve media by ID for a specific category
app.get('/:category/:id', async (req, res) => {
    const { category, id } = req.params;

    // Validate category
    if (!['anime', 'manga', 'light-novels'].includes(category)) {
        return res.status(400).json({ error: 'Invalid category' });
    }

    try {
        // Filter by category within the MediaModel
        const media = await MediaModel.findOne({ id: id, _media_type: category });
        if (!media) {
            return res.status(404).json({ error: 'Media not found' });
        }

        res.json(media);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
