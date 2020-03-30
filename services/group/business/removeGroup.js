const Group = require('../model/Group');
const error = require('../../../utils/error');

module.exports = async (userId, id) => {
    const group = await Group.find({id: id});

    if (!group) {
        throw await error([{msg: 'Grupo não cadastrado!'}]);
    }

    if (!userId === group.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    group.active = false;
    group.save();
};