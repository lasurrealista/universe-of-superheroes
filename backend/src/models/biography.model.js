const mongoose = require('mongoose');

const BiographySchema = mongoose.Schema({
    fullName : {
        type: String,
        required: false
    },
    alterEgos : {
        type: String,
        required: false
    },
    aliases : {
        type: [String],
        required: false
    },
    placeOfBirth : {
        type: String,
        required: true
    },
    firstAppearance : {
        type: String,
        required: true
    },
    publisher : {
        type: String,
        required: true
    },
    alignment : {
        type: String,
        required: false
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Biography', BiographySchema);

/*
    fullName : string = '';
    alterEgos : string = '';
    aliases : string[] = [];
    placeOfBirth : string = '';
    firstAppearance : string = '';
    publisher : string = '';
    alignment : string = '';
*/