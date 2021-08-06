const mongoose = require('mongoose');

const ImagesSchema = mongoose.Schema({
    xs: {
        type: String,
        required: true
    },
    sm: {
        type: String,
        required: false
    },
    md: {
        type: String,
        required: false
    },
    lg: {
        type: String,
        required: false
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Images', ImagesSchema);

/*
    xs: string = '';
    sm: string = '';
    md: string = '';
    lg: string = '';
*/