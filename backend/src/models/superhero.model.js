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

const AppearanceSchema = mongoose.Schema({
    gender: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: false
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
        required: false
    },
    alignment : {
        type: String,
        required: false
    },
}, {
    timeStamps: true
});

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

const SuperheroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    powerstats: PowerstatsSchema,
    appearance: AppearanceSchema,
    biography: BiographySchema,
    work: WorkSchema,
    connections: ConnectionsSchema,
    images: ImagesSchema,
}, {
    timeStamps: true
});

module.exports = mongoose.model('Superhero', SuperheroSchema);

/*
    _id: number | string = 0;
    name: string = '';
    slug: string = '';
    powerstats: Powerstats = new Powerstats();
    appearance: Appearance = new Appearance();
    biography: Biography = new Biography();
    work: Work = new Work();
    connections: Connections = new Connections();
    images: Images = new Images();
*/