const mongoose = require('mongoose');

const MarvelEventSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    modified : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('MarvelEvent', MarvelEventSchema);

/*
    _id : number | string = '';
    title : string = '';
    description : string = '';
    modified : string = '';
    url : string = ''
*/