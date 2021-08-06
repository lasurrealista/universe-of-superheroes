const mongoose = require('mongoose');

const AppearanceSchema = mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    height: {
        type: [String],
        required: true
    },
    weight: {
        type: [String],
        required: true
    },
    eyeColor: {
        type: String,
        required: true
    },
    hairColor: {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Appearance', AppearanceSchema);

/*
    gender: string = '';
    race: string = '';
    height: string[] = [];
    weight: string[] = [];
    eyeColor: string = '';
    hairColor: string = '';
*/