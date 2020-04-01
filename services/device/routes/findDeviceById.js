const express = require('express');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const findDeviceById = require('../business/findDeviceById');

router.get('/id/:id/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
    try {
        const page = new Number(request.params.page);
        const quantityPerPage = new Number(request.params.quantityPerPage);
        const devices = await findDeviceById(request.user.id, request.params.id, page, quantityPerPage,);

        response
            .status(200)
            .send(devices)
    } catch (error) {
        response
            .status(400)
            .json(error)
    }
});

module.exports = router;