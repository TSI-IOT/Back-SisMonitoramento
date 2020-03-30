const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (id) => {
    let user = await User.find({id: id});

    if (!user) {
        throw await error([{msg: 'Usuario não cadastrado!'}]);
    }

    user.active = false;
    user.save();
};