const role = require('../enums/userActive');
const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (id) => {
    let user = await User.findById(id);
    if (!user) {
        throw await error([{msg: 'Usuario não cadastrado!'}]);
    }
    user.userActive = role.FALSE;
    user.save();
};