const MarvelEvent = require('../../models/marvelEvent.model');

exports.create = marvelEventData => {
    const marvelEvent = new MarvelEvent(marvelEventData);
    return marvelEvent.save();
};

exports.findAll = () => MarvelEvent.find().populate();

exports.findOne = id => MarvelEvent.findById(id).populate();

exports.update = (id, updateData) => MarvelEvent.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await MarvelEvent.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}

