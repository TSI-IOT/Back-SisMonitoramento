const bcrypt = require('bcryptjs');
const Device = require('../model/Device');
const error = require('../../../utils/error');

module.exports = async (user, data) => {
    const device = new Device(data);
    device.userId = user;

    let exists = await Device.exists({userId: device.userId, groupId: device.groupId, name: device.name});

    if (exists) {
        throw await error([{msg: 'Já existe um dispositivo com o mesmo título cadastrado neste Grupo!'}]);
    }

    device.password = Math.random().toString(36).slice(-10);

    const salt = await bcrypt.genSalt(10);
    device.password = await bcrypt.hash(device.password, salt);


    device.save();
};
