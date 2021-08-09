const MarvelCreator = require('../../models/marvelCreator.model');

exports.create = marvelCreatorData => {
    const marvelCreator = new MarvelCreator(marvelCreatorData);
    return marvelCreator.save();
};

exports.findAll = () => MarvelCreator.find().populate();

exports.findOne = id => MarvelCreator.findById(id).populate();

exports.update = (id, updateData) => MarvelCreator.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => MarvelCreator.findByIdAndRemove(id);
