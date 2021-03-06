const mqttServer = require('mqtt-server');
const mqttAuthenticator = require("../middlewares/mqttAuthenticator");

let subscribes = {};

const removeDeviceFromSubscribe = (device) => {
    device.destroy();
    for (key in subscribes) {
        if (subscribes[key] == device) {
            delete subscribes[key];
        }
    }
};

const addDeviceOnSubscribe = (topic, device) => {
    subscribes[topic] = device;
    // console.log("TODOS OS SUBSCRIBES");
    // console.log(subscribes);
    console.log(Object.keys(subscribes));
};

const host = {
    mqtt: 'tcp://0.0.0.0:1883'
};

const options = {
    emitEvents: true
};

const events = (device) => {
    const websocket = require('../websocket/main');

    device.on('connect', function (packet) {
        console.log(packet);
        mqttAuthenticator(device, packet);

    });

    device.on('subscribe', (packet) => {
        console.log("DISPOSITIVO REALIZOU UM SUBSCRIBE:");
        console.log(packet);

        const subscription = packet.subscriptions[0];
        addDeviceOnSubscribe(subscription.topic, device);

        // DEVOLVENDO UM RECONHECIMENTO DE SUBSCRIBE - SUBACK
        const subackPacket = {
            returnCode: (packet.qos == 0? 0:(packet.qos == 1? 1:2)), //0 caso qos=0, 1 caso qos=1, 2 caso qos=2
            granted: [packet.qos],
            messageId: packet.messageId
        }

        device.suback(subackPacket, function () {
            console.log("SUBACK ENVIADO");
        })
    });

    device.on('pingreq', function () {
        console.log("RESPONDENDO PING");
        device.pingresp();
    });

    device.on('publish', (packet) => {
        console.log("DISPOSITIVO REALIZOU PUBLISH:");
        console.log(packet);

        const topic = packet.topic.split('/');
        const groupId = topic[0];
        const deviceId = topic[1];
        const payload = packet.payload.toString();

        console.log(payload);

        websocket.sockets.in(groupId).emit(deviceId, JSON.parse(payload));

        // DEVOLVENDO UM RECONHECIMENTO DE PUBLISH - PUBACK
        if(packet.qos == 1 || packet.qos == 2) {
            const pubackPacket = {
                messageId: packet.messageId
            }

            device.puback(pubackPacket, function () {
                console.log("PUBACK ENVIADO");
            })
        }
    });


    device.on('puback', (packet) => {
        console.log(packet);
        console.log("PUBACK RECEBIDO");
    });

    device.on('suback', (packet) => {
        console.log(packet);
        console.log("SUBACK RECEBIDO");
    });

    device.on('close', function () {
        console.log("CONEXÃO FECHADA - CLOSE");
        removeDeviceFromSubscribe(device);
    });

    device.on('error', function () {
        console.log("ERRO NA CONEXÃO - ERROR");
        removeDeviceFromSubscribe(device);
    });

    device.on('disconnect', function () {
        console.log("CONEXÃO FECHADA - DISCONNECT");
        removeDeviceFromSubscribe(device);
    });
};

const mqtt = {
    subscribes: subscribes,
    server: mqttServer(host, options, events)
};

module.exports = mqtt;