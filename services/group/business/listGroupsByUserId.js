const Group = require('../model/Group');
const error = require('../../../utils/error');

module.exports = async (userId, page, quantityPerPage) => {
    let groups = await Group
        .find({active: true, userId: userId})
        .limit(quantityPerPage)
        .skip(quantityPerPage * page)
        .sort({
            date: 'asc'
        });

    if (groups.length === 0) {
        throw await error([{msg: 'Nenhum grupo encontrado!'}]);
    }
    return groups;
};