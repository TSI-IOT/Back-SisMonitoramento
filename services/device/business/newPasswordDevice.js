const bcrypt = require('bcryptjs');
const Device = require('../model/Device');
const error = require('../../../utils/error');

module.exports = async (userId, id) => {
    const device = Device.findById(id);

    if (!device) {
        throw await error([{msg: 'Dispositivo não encontrado!'}]);
    }

    if (userId != device.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    const random = Math.random().toString(36).slice(-10);
    const salt = await bcrypt.genSalt(10);
    device.password = await bcrypt.hash(random, salt);

    device.save();
};