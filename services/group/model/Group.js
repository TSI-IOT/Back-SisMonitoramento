const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});


module.exports = Group = mongoose.model('group', schema)