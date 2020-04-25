const Device = require('../model/Device');
const error = require('../../../utils/error');


module.exports = async (name, id, userId) => {
    const device = await Device.findOne({_id: id, active: true});

    if (!device) {
        throw await error([{msg: 'Dispositivo não encontrado!'}]);
    }

    if (userId != device.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    if (device.name != name) {
        throw await error([{msg: 'Nome do dispositivo incorreto!'}]);
    }
    device.active = false;

    device.save();
};