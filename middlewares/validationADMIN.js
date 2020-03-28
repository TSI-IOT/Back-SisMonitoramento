const error = require('../utils/error');
const rolee = require('../services/user/enums/role');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (request, response, next) => {
    try {
        const user = request.user;
        if (rolee.ADMINISTRATOR != user.role) {
            throw await error([{msg: 'Usuario não autorizado!'}]);
        }
        next();
    } catch (e) {
        response
            .status(400)
            .send(e)
    }
};