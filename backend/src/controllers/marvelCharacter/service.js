const MarvelCharacter = require('../../models/marvelCharacter.model');

exports.create = marvelCharacterData => {
    const marvelCharacter = new MarvelCharacter(marvelCharacterData);
    return marvelCharacter.save();
};

exports.findAll = () => MarvelCharacter.find().populate();

exports.findOne = id => MarvelCharacter.findById(id).populate();

exports.update = (id, updateData) => MarvelCharacter.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await MarvelCharacter.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}
