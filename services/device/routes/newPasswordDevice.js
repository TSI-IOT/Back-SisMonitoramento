const express = require('express');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const newPasswordDevice = require('../business/newPasswordDevice');

const router = express.Router();

router.put('/update/password/id/:id', servicesAuthenticator, async (request, response) => {
    try {
        await newPasswordDevice(request.user.id, request.params.id);
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