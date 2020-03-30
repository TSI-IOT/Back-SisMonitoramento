const createDevice  = require('./createDevice');
const findDeviceById = require('./findDeviceById');
const removeDevice = require('./removeDevice');

module.exports = [
    createDevice,
    findDeviceById,
    removeDevice
];
