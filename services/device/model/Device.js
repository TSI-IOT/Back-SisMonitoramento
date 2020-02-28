const mongoose = require('mongoose');
const deviceTypes = require('../enums/deviceTypes');
const unitsOfMeasurement = require('../enums/unitsOfMeasurement');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId
    },
    deviceType: {
        type: String,
        enum: Object.values(deviceTypes)
    },
    unitOfMeasurement: {
        type: String,
        enum: Object.values(unitsOfMeasurement),
        required: function () {
            return this.deviceType == deviceTypes.ISSUER;
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Device = mongoose.model('device', schema);
