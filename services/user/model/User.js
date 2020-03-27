const mongoose = require('mongoose');
const userTypes = require('../enums/role');
const userActive = require('../enums/userActive');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: Object.values(userTypes)
    },
    userActive: {
        type: String,
        enum: Object.values(userActive)
    }
});

module.exports = User = mongoose.model('user', schema);