const MarvelComic = require('../../models/marvelComic.model');

exports.create = marvelComicData => {
    const marvelComic = new MarvelComic(marvelComicData);
    return marvelComic.save();
};

exports.findAll = () => MarvelComic.find().populate();

exports.findOne = id => MarvelComic.findById(id).populate();

exports.update = (id, updateData) => MarvelComic.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => MarvelComic.findByIdAndRemove(id);
