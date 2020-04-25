const express = require('express');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const findDeviceById = require('../business/findDeviceById');

router.get('/id/:id', servicesAuthenticator, async (request, response) => {
    const token = request.header('x-auth-token');
    try {
        const device = await findDeviceById(request.user.id, request.params.id, token);
        response
            .status(200)
            .json(device);
    } catch (error) {
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;