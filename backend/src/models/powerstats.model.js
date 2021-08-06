const mongoose = require('mongoose');

const PowerstatsSchema = mongoose.Schema({
    intelligence: {
        type: Number,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    durability: {
        type: Number,
        required: false
    },
    power: {
        type: Number,
        required: true
    },
    combat: {
        type: Number,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Powerstats', PowerstatsSchema);

/*
  intelligence: number = 0;
  strength: number = 0;
  speed: number = 0;
  durability: number = 0;
  power: number = 0;
  combat: number = 0;
*/