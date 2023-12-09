#! /usr/bin/env node

console.log(
    `This script populates some test books, authors, 
    genres and bookinstances to your database. Specified 
    database as argument - e.g.: 
    node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"`
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Media = require("./models/media.js");
const Users = require("./models/users.js");
const Studios = require("./models/studios.js");

const medias = [];
const users = [];
const studios = [];
const genres = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    //await createUsers();
    //await createMedia();
    //await createStudios();

    await Media.find().populate('studio');
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function userCreate(index, username, uuid) {
    const userdetail = {
        name: username,
        id: uuid
    };

    const user = new Users(userdetail);

    await user.save();
    users[index] = user;
    console.log(`Added user: ${username}`);
}

async function genreCreate(index, id, name) {
    const genredetail = {
        id: id,
        names: name
    }
} 

async function studioCreate(
    index, id, name
) {
    const studiodetail = {
        id: id,
        names: name
    }

    const studio = new Studios(studiodetail);
    await studio.save();
    studios[index] = studio;
    console.log(`Added studio: ${name}`);
}

async function mediaCreate(
    index,
    _private,
    _media_type,
    _show_type,
    status,
    id,
    name,
    rating,
    family_id,
    genres,
    episodesCount,
    episodesDuration,
    favs,
    watching,
    completed,
    planning,
    paused,
    dropped,
    studios,
    started_at,
    sequel_id = null
) {
    const mediadetail = {
        _private: _private,
        _media_type: _media_type,
        _show_type: _show_type,
        status: status,
        id: id,
        name: name,
        short_name: '',
        rating: rating,
        family_id: family_id,
        sequel_id: sequel_id,
        genres: genres,
        episodes: {
            count: episodesCount,
            duration: episodesDuration,
        },
        stats: {
            favs: favs,
            watching: watching,
            completed: completed,
            planning: planning,
            paused: paused,
            dropped: dropped,
        },
        studios: studios,
        started_at: started_at,
        created_at: Date.now(),
        updated_at: Date.now(),
    };

    const media = new Media(mediadetail);
    await media.save();
    medias[index] = media;
    console.log(`Added media: ${name}`);
}

async function createUsers() {
    console.log("Adding users");
    await Promise.all([
        userCreate(0, "sigmacw", 1329),
        userCreate(1, "redo", 727),
    ]);
}

async function createStudios() {
    console.log("Adding studios");
    await Promise.all([
        studioCreate(0, 0, 'SHAFT'),
        studioCreate(1, 1, '8-bit'),
        studioCreate(2, 2, 'MAPPA'),
        studioCreate(3, 3, 'Madhouse')
    ]);
}

async function createMedia() {
    console.log("Adding media");
    await Promise.all([
        mediaCreate(
            0,
            false,
            'anime',
            'TV',
            'Finished',
            0,
            'Bakemonogatari',
            '16+',
            0,
            ['romance', 'drama', 'comedy'],
            12,
            25,
            1203,
            5303,
            12093,
            201,
            4,
            1231,
            [0],
            '01/01/2007',
            1),
        mediaCreate(
            1,
            false,
            'anime',
            'TV',
            'Finished',
            1,
            'Nisemonogatari',
            '16+',
            0,
            ['romance', 'drama', 'comedy'],
            12,
            25,
            120,
            5303,
            1209,
            20,
            4,
            1231,
            [0],
            '01/01/2008')
    ]);
}
