const config = require('config');
const Device = require('../model/Device');
const cryptoJS = require('crypto-js');
const error = require('../../../utils/error');

module.exports = async (userId, id) => {
    const device = await Device.findOne({_id: id, active: true});

    if (!device) {
        throw await error([{msg: 'Dispositivo não encontrado!'}]);
    }

    if (userId != device.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    const senha = Math.random().toString(36).slice(-10);
    console.log("Nova senha do device: " + senha);
    device.password = await cryptoJS.AES.encrypt(senha, config.get('cryptoJSSecret'));

    device.save();
};