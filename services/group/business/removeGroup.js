const Group = require('../model/Group');
const error = require('../../../utils/error');

module.exports = async (user, id) => {
    const group = await Group.findById(id);

    if (!group) {
        throw await error([{msg: 'Grupo não cadastrado!'}]);
    }


    if (!user.id === group.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    group.active = false;
    group.save();
};