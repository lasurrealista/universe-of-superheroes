const mongoose = require('mongoose');

const MarvelStorySchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('MarvelStory', MarvelStorySchema);

/*
    _id : number | string = '';
    name : string = '';
    title : string = ''
*/