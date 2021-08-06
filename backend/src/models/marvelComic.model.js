const mongoose = require('mongoose');

const MarvelComicSchema = mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('MarvelComic', MarvelComicSchema);

/*
    _id: number | string = '';
    thumbnail: string = '';
    title: string = '';
    pageCount: number = 0;
    url: string = ''
*/