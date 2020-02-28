const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (socket, next) => {
    console.log(socket.handshake.query.token);
    const token = socket.handshake.query.token;
    try {
        const decodedToken = jwt.verify(token, config.get("jwtSecret"));
        const user = decodedToken.user;
        socket.handshake.query.user = user;
        return next();
    } catch (e) {
        console.log('Token Inválido!');
        return next(new Error('authentication error'));
    }
};