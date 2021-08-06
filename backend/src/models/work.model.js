const mongoose = require('mongoose');

const WorkSchema = mongoose.Schema({
    occupation:  {
        type: String,
        required: true
    },
    base:  {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Work', WorkSchema);

/*
    occupation: string = '';
    base: string = '';
*/