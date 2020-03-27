const Device = require('../model/Device');

module.exports = async () => {
    const devices = await Device.find();
    return devices;
};