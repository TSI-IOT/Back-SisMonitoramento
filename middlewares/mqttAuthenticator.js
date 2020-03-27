const bcrypt = require('bcryptjs');
const findDeviceById = require('../services/device/business/findDeviceById');
const error = require('../utils/error');

module.exports = async (device, packet) => {
    const username = packet.username;
    const password = packet.password.toString();

    try {
        const dev = await findDeviceById(username);

        if (!dev) {
            throw await error([{msg: 'Id ou senha invalidos'}]);
        }

        const isMatch = await bcrypt.compare(password, dev.password);

        if (!isMatch) {
            throw await error([{msg: 'Id ou senha invalidos'}]);
        }

        console.log('NOVA CONEXÃO MQTT ESTABELECIDA');
        device.connack({
            returnCode: 0
        }, function () {
            console.log("CONNACK ENVIADO! OK");
        });

    } catch (e) {
        device.connack({
            returnCode: 1
        }, function () {
            console.log("CONNACK ENVIADO! ID OU SENHA INVALIDA");
        });
    }
};