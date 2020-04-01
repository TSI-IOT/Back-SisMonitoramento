const Device = require('../model/Device');
const error = require('../../../utils/error');


module.exports = async (userId, id) => {
    let device = await Device.findById(id);

    if (!device) {
        throw await error([{msg: 'Dispositivo não cadastrado!'}]);
    }

    if (userId != device.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    device.active = false;
    device.save();
};