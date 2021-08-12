const MarvelStory = require('../../models/marvelStory.model');

exports.create = marvelStoryData => {
    const marvelStory = new MarvelStory(marvelStoryData);
    return marvelStory.save();
};

exports.findAll = () => MarvelStory.find().populate();

exports.findOne = id => MarvelStory.findById(id).populate();

exports.update = (id, updateData) => MarvelStory.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await MarvelStory.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}

