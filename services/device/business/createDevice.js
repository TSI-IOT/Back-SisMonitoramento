const bcrypt = require('bcryptjs');
const Device = require('../model/Device');

module.exports = async (user, data) => {
    const device = new Device(data);
    device.user = user;

    const salt = await bcrypt.genSalt(10);
    device.password = await bcrypt.hash(device.password,salt);

    device.save();
};
