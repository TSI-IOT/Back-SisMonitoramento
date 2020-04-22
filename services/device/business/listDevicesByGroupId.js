const Device = require('../model/Device');

module.exports = async (userId, groupId, page, quantityPerPage) => {
    let devices = await Device
        .find({active: true, userId: userId, groupId: groupId})
        .limit(quantityPerPage)
        .skip(quantityPerPage * (page - 1))
        .sort({
            date: 'asc'
        });
    return devices;
};