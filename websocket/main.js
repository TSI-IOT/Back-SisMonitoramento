const config = require('config');
const Server = require('socket.io');
const authenticator = require('../middlewares/websocketAuthenticator');
const mqtt = require('../mqtt/main');

const websocket = new Server();

websocket.use(authenticator);

websocket.on('connection',  (socket) => {
    const user = socket.handshake.query.user;
    const groupId = socket.handshake.query.groupId;
    console.log("Novo usuario conectado ao WS: " + user.id);

    socket.join(groupId);
    console.log("Novo usuario escutando no grupo: " + socket.handshake.query.groupId);

    socket.on('publish', (data) => {
        console.log(data.deviceId);
        const device = mqtt.subscribes[data.deviceId];

        if(!device){
            console.log("Dispositivo/Topico inexistente");
            return;
        }

        const obj = {
            cmd: 'publish',
            retain: false,
            qos:0,
            dup: false,
            length: 10,
            topic: data.deviceId,
            payload: data.msg
        };
        console.log("Enviando mensagem");
        console.log(obj);
        device.publish(obj, function(){
            console.log("Mensagem enviada");
        },function () {
            console.log("Erro ao enviar dados");
        });

    });
});

module.exports = websocket;