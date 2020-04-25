const Device = require('../model/Device');
const error = require('../../../utils/error');
const cryptoJS = require('crypto-js');
const config = require('config');


module.exports = async (userId, id, token) => {
    const device = await Device.findOne({_id: id, active: true});

    if (!device) {
        throw await error([{msg: 'Device não encontrado!'}]);
    }

    if (device.userId != userId) {
        throw await error([{msg: 'Usuario não Autorizado!'}]);
    }

    const senhaDesc = await cryptoJS.AES.decrypt(device.password, config.get('cryptoJSSecret'));
    device.password = await cryptoJS.AES.encrypt(senhaDesc.toString(cryptoJS.enc.Utf8), token);

    return device;
};