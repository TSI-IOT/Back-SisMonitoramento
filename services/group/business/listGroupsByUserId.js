const Group = require('../model/Group');
const error = require('../../../utils/error');

module.exports = async (userId, page, quantityPerPage) => {
    let groups = await Group
        .find({active: true, userId: userId})
        .limit(quantityPerPage)
        .skip(quantityPerPage * (page - 1))
        .sort({
            date: 'asc'
        });
    return groups;
};