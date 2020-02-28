const Group = require('../model/Group')
module.export = async (userId, page, quantityPerPage) => {
    const groups = await Group
        .find({userId:userId})
        .limit(quantityPerPage)
        .skip(quantityPerPage * page)
        .sort({
            date: 'asc'
        });
    return groups;
}