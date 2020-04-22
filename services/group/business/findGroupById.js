const Group = require('../model/Group');
const error = require('../../../utils/error');

module.exports = async (userId, id) => {
    const group = await Group.findOne({_id: id, userId: userId, active: true});

    if(!group){
        throw await error([{msg: 'Grupo não encontrado!'}]);
    }
    return group;
};