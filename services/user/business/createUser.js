const User = require('../model/User');
const bcrypt = require('bcryptjs');
const error = require('../../../utils/error');

module.exports = async (data) => {
    let exists = await User.exists({email: data.email});

    if (exists) {
        throw  await error([{msg: 'Usuário já registrado'}]);
    }

    user = new User(data);

    //Criptografando a senha
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save();

};