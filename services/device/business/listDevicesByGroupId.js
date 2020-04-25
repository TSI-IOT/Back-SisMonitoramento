const Device = require('../model/Device');

module.exports = async (userId, groupId, page, quantityPerPage) => {
    const devices = await Device
        .find({active: true, userId: userId, groupId: groupId})
        .limit(quantityPerPage)
        .skip(quantityPerPage * (page - 1))
        .select('-password')
        .sort({
            date: 'asc'
        });
    return devices;
};