const express = require('express');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const createHumidityDevice = require('../business/createHumidityDevice');

const router = express.Router();

router.post('/preset/humidity', servicesAuthenticator, async (request, response) => {
    try {
        await createHumidityDevice(request.user.id, request.body);
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