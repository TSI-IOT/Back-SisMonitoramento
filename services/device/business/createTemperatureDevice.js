const bcrypt = require('bcryptjs');
const Device = require('../model/Device');
const deviceTypes = require('../enums/deviceTypes');
const unitsOfMeasurement = require('../enums/unitsOfMeasurement');
const error = require('../../../utils/error');

module.exports = async (userId, data) => {
    let exists = await Device.exists({
        userId: userId,
        groupId: data.groupId,
        name: data.name,
        active: true
    });

    if (exists) {
        throw await error([{msg: 'Já existe um dispositivo com o mesmo título cadastrado neste Grupo!'}]);
    }

    const device = new Device(data);

    device.userId = userId;
    device.deviceType = deviceTypes.ISSUER;
    device.unitOfMeasurement = unitsOfMeasurement.CELSIUS;
    const random = Math.random().toString(36).slice(-10);
    const salt = await bcrypt.genSalt(10);
    device.password = await bcrypt.hash(random, salt);

    device.save();
};
