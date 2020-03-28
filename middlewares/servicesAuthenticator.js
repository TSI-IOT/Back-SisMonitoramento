const jwt = require('jsonwebtoken');
const error = require('../utils/error');
const findUserById = require('../services/user/business/findUserById');
const config = require('config');

module.exports = async (request, response, next) => {
    const token = request.header('x-auth-token');

    try {
        if (!token) {
            throw await error([{msg: 'Token invalido'}]);
        }
        const decodedToken = await jwt.verify(token, config.get('jwtSecret'));
        const user = await findUserById(decodedToken.user.id);

        if (!user.active) {
            throw await error([{msg: 'Usuario não autorizado!'}]);
        }

        request.user = user;
        next();
    } catch (e) {
        response
            .status(400)
            .send(e)
    }
};