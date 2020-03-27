const error = require('../utils/error');
const role = require('../services/user/enums/role');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (request, response, next) => {
    try {
        const user = request.user;
        if (!user.role == role.ADMINISTRATOR) {
            throw await error([{msg: 'User Invalido'}]);
        }
        next();
    } catch (e) {
        response
            .status(400)
            .send(error)
    }
};