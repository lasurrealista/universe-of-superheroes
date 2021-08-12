const User = require('../../models/user.model');

exports.create = userData => {
    const user = new User(userData);
    return user.save();
};

exports.findAll = () => User.find().populate();

exports.findOne = id => User.findById(id).populate();

exports.update = (id, updateData) => User.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = async id => {

    const doc = await User.findByIdAndRemove(id);

    if (!doc) {
        throw new Error('Not found');
    }
    return doc.delete();
}

