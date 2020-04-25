const Group = require('../model/Group');
const error = require('../../../utils/error');

module.exports = async (userId, title, id) => {
    const group = await Group.findOne({_id: id, active: true});

    if (!group) {
        throw await error([{msg: 'Grupo não encontrado!'}]);
    }

    if (userId != group.userId) {
        throw await error([{msg: 'Usuario não autorizado!'}]);
    }

    if (group.title != title) {
        throw await error([{msg: 'Titulo do grupo incorreto!'}]);
    }

    group.active = false;
    group.save();
};