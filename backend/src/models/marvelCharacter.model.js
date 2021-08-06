const mongoose = require('mongoose');

const MarvelCharacterSchema = mongoose.Schema({
    thumbnail : {
        type: String,
        required: true
    },
    profile : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
    stories : {
        type: Number,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('MarvelCharacter', MarvelCharacterSchema);

/*
    _id : number | string = '';
    name : string = '';
    thumbnail : string = '';
    profile : string = '';
    url : string = '';
    stories : number = 0
*/