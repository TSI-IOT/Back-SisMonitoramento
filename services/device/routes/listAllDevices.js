const express = require('express');
const router = express.Router();
const listAllDevices = require('../business/listAllDevices');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/', servicesAuthenticator, async (request, response) => {
    try {
        const data = await listAllDevices();
        response.status(200).json(data);
    } catch (e) {
        response.status(400).json([{msg: e}]);
    }
});

module.exports = router;