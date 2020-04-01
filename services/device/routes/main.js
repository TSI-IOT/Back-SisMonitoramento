const createDevice = require('./createDevice');
const createTemperatureDevice = require('./createTemperatureDevice');
const createHumidityDevice = require('./createHumidityDevice');
const findDeviceById = require('./findDeviceById');
const removeDevice = require('./removeDevice');
const newPasswordDevice = require('./newPasswordDevice');


module.exports = [
    createDevice,
    createTemperatureDevice,
    createHumidityDevice,
    findDeviceById,
    removeDevice,
    newPasswordDevice
];
