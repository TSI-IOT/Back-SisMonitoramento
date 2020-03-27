const mqttServer = require('mqtt-server');

let subscribes = {};

const removeDeviceFromSubscribe = (device) => {
    device.destroy();
    subscribes = subscribes.filter(function (subscribe) {
        return subscribe == device;
    });
    console.log("TODOS OS SUBSCRIBES");
    console.log(subscribes.size);
};

const addDeviceOnSubscribe = (topic, device) => {
    subscribes[topic] = device;
    console.log("TODOS OS SUBSCRIBES");
    console.log(subscribes.size);
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
        console.log('NOVA CONEXÃO MQTT');
        console.log(packet);

        // DEVOLVENDO UM RECONHECIMENTO DE PUBLISH - PUBACK
        device.connack({
            returnCode: 0
        }, function () {
            console.log("CONNACK ENVIADO");
        });
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
        device.puback({messageId: 1}, function () {
            console.log("PUBACK ENVIADO");
        })
    });

    device.on('subscribe', (packet) => {
        console.log("DISPOSITIVO REALIZOU UM SUBSCRIBE:");
        console.log(packet);

        const subscription = packet.subscriptions[0];
        addDeviceOnSubscribe(subscription.topic, device);

        // DEVOLVENDO UM RECONHECIMENTO DE SUBSCRIBE - SUBACK
        device.suback({returnCode: 1, granted: [packet.qos], messageId: packet.messageId}, function () {
            console.log("SUBACK ENVIADO");
        })
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