const createDevice = require('./createDevice');
const createTemperatureDevice = require('./createTemperatureDevice');
const createHumidityDevice = require('./createHumidityDevice');
const listDevicesByGroupId = require('./listDevicesByGroupId');
const removeDevice = require('./removeDevice');
const newPasswordDevice = require('./newPasswordDevice');
const findDeviceById = require('./findDeviceById');

module.exports = [
    createDevice,
    createTemperatureDevice,
    createHumidityDevice,
    listDevicesByGroupId,
    removeDevice,
    newPasswordDevice,
    findDeviceById
];
