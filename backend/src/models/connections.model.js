const mongoose = require('mongoose');

const ConnectionsSchema = mongoose.Schema({
    groupAffiliation: {
        type: String,
        required: false
    },
    relatives: {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Connections', ConnectionsSchema);

/*
    groupAffiliation: string = '';
    relatives: string = '';
*/