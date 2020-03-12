const Device = require('../model/Device');

module.exports = async (id) => {
    const device = await Device.findById(id);
    return device;
};