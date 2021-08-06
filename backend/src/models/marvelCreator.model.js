const mongoose = require('mongoose');

const MarvelCreatorSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    comicsAvailable: {
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

module.exports = mongoose.model('MarvelCreator', MarvelCreatorSchema);

/*
    _id: number | string ='';
    fullName: string = '';
    thumbnail: string = '';
    comicsAvailable: number = 0;
    url: string = ''
*/