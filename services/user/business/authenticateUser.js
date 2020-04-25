const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let user = await User.findOne({email: data.email});

    if (!user) {
        throw await error([{msg: 'E-mail ou senha invalidos!'}]);
    }

    if (!user.active) {
        throw await error([{msg: 'Conta invalida!'}]);
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
        throw await error([{msg: 'E-mail ou senha invalidos!'}]);
    }

    const payload = {
        user: {
            id: user.id,
        }
    };

    const options = {
        //  expiresIn: 86400
    };

    const token = await jwt.sign(payload, config.get('jwtSecret'), options);

    const credentials = {
        token: token,
        user: {
            name: user.name,
            email: user.email,
            role:user.role
        }
    };

    return credentials;
};