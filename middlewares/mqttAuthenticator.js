const cryptoJS = require('crypto-js');
const config = require('config');
const Device = require('../services/device/model/Device');
const error = require('../utils/error');

module.exports = async (device, packet) => {
    const username = packet.username;
    const password = packet.password.toString();

    try {
        const dev = await Device.findOne({_id: username, active: true});

        if (!dev) {
            throw await error([{msg: 'Id ou Senha invalidos'}]);
        }

        const senha = await cryptoJS.AES.decrypt(dev.password, config.get('cryptoJSSecret'));
        const senhaDescriptografada = await senha.toString(cryptoJS.enc.Utf8);


        if (password != senhaDescriptografada) {
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