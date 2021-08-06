const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    accessToken: {
        type: String,
        required: false
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);

/*
    _id: string | number = 0;
    first_name?: string = '';
    last_name?: string = '';
    email: string = '';
    password?: string = '';
    role?: string = '';
    accessToken?: string = ''
*/