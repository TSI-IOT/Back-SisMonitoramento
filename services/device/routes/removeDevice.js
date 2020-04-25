const express = require('express');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const removeDevice = require('../business/removeDevice');

router.delete('/name/:name/id/:id', servicesAuthenticator, async (request, response) => {
    try {
        await removeDevice(request.params.name, request.params.id, request.user.id);
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