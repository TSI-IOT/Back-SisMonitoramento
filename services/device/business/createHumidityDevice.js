const bcrypt = require('bcryptjs');
const Device = require('../model/Device');
const deviceTypes = require('../enums/deviceTypes');
const unitsOfMeasurement = require('../enums/unitsOfMeasurement');

module.exports = async (user, data) => {
    const device = new Device(data);

    device.user = user;
    device.deviceType = deviceTypes.ISSUER;
    device.unitOfMeasurement = unitsOfMeasurement.PERCENT;

    const salt = await bcrypt.genSalt(10);
    device.password = await bcrypt.hash(device.password,salt);

    device.save();
};
