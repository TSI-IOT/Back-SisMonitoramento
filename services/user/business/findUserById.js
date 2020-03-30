const User = require('../model/User');
const error = require('../../../utils/error');

module.exports = async (id) => {
    let user = await User.findById(id).select('-password');

    if(user.id != id){
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }
    if(!user){
        throw await error([{msg: 'ID de Usuario invalido!'}]);
    }
    return user;
};