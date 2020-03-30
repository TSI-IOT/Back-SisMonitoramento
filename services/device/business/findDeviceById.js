const Device = require('../model/Device');
const error = require('../../../utils/error');

module.exports = async (userId, groupId, page, quantityPerPage) => {

    let devices = await Device
        .find({active: true, userId: userId, groupId: groupId})
        .limit(quantityPerPage)
        .skip(quantityPerPage * page)
        .sort({
            date: 'asc'
        });

    if (devices.length === 0) {
        throw await error([{msg: 'Nenhum dispositivo encontrado!'}]);
    }
    return devices;
};