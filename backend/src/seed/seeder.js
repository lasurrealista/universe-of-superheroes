const fsp = require('fs').promises;
const Superhero = require('../models/superhero.model');
const marvelCharacter = require('../models/marvelCharacter.model');
const marvelCreator = require('../models/marvelCreator.model');
const marvelComic = require('../models/marvelComic.model');
const marvelStory = require('../models/marvelStory.model');
const marvelEvent = require('../models/marvelEvent.model');
const User = require('../models/user.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`, 
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {limit: 100});
        }
    }
};

( async () => {

    seedCollection(Superhero, 'superheroes');
    seedCollection(marvelCharacter, 'marvelCharacters');
    seedCollection(marvelComic, 'marvelComics');
    seedCollection(marvelCreator, 'marvelCreators');
    seedCollection(marvelEvent, 'marvelEvents');
    seedCollection(marvelStory, 'marvelStories');
    seedCollection(User, 'users');

})();