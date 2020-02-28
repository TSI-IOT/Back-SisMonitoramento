const express = require('express');
const config = require('config');
const websocket = require('./websocket/main');
const connectDB = require('./database/connectDB');

const mqtt = require('./mqtt/main');

const app = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || config.get('serverPort');

/**
 * DB connection
 */
connectDB();

/**
 * Middlewares
 */
app.use(express.json({extended: false}));

/**
 * Routes
 */
app.use('/user', require('./services/user/routes/main'));
app.use('/group', require('./services/group/routes/main'));
app.use('/device', require('./services/device/routes/main'));

/**
 * Socket.IO
 */
websocket.attach(server);

/**
 * MQTT
 */
mqtt.server.listen(() => {
    console.log("MQTT Server listening")
});

/**
 * Application start
 */
server.listen(PORT, () => {
    console.log('HTTP Server listening');
});