const express = require('express');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const createTemperatureDevice = require('../business/createTemperatureDevice');

const router = express.Router();

router.post('/preset/temperature', servicesAuthenticator, async (request, response) => {
    try {
        await createTemperatureDevice(request.user.id, request.body);
        response
            .status(200)
            .send()
    } catch (error) {
        response
            .status(400)
            .json(error)
    }
});

module.exports = router;