const bcrypt = require('bcryptjs');
const Device = require('../model/Device');
const error = require('../../../utils/error');
const cryptoJS = require('crypto-js');
const config = require('config');

module.exports = async (userId, data) => {
    let exists = await Device.exists({
        userId: userId,
        groupId: data.groupId,
        name: data.name,
        role: true
    });

    if (exists) {
        throw await error([{msg: 'Já existe um dispositivo com o mesmo título cadastrado neste Grupo!'}]);
    }

    const device = new Device(data);
    device.userId = userId;

    const senha = Math.random().toString(36).slice(-10);
    console.log("Senha do Device: " + senha);
    device.password = await cryptoJS.AES.encrypt(senha, config.get('cryptoJSSecret'));
    device.save();
};
