const createDevice = require('./createDevice');
const createTemperatureDevice = require('./createTemperatureDevice');
const createHumidityDevice = require('./createHumidityDevice');
const listDevicesByGroupId = require('./listDevicesByGroupId');
const removeDevice = require('./removeDevice');
const newPasswordDevice = require('./newPasswordDevice');


module.exports = [
    createDevice,
    createTemperatureDevice,
    createHumidityDevice,
    listDevicesByGroupId,
    removeDevice,
    newPasswordDevice
];
