const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (id) => {
    let user = await User.findById(id);
    if(!user){
        throw await error([{msg: 'ID de Usuario invalido!'}]);
    }
    return user;
};