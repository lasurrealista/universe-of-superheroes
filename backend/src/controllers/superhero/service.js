const Superhero = require('../../models/superhero.model');

exports.create = superheroData => {
    const superhero = new Superhero(superheroData);
    return superhero.save();
};

exports.findAll = () => Superhero.find().populate();

exports.findOne = id => Superhero.findById(id).populate();

exports.update = (id, updateData) => Superhero.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Superhero.findByIdAndRemove(id);
