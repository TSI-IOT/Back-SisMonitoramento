const express = require('express');
const listAllUsers = require('../business/listAllUsers');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationADMIN = require('../../../middlewares/validationADMIN');

router.get('/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, validationADMIN, async (request, response) => {
    try {
        const page = new Number(request.params.page);
        const quantityPerPage = new Number(request.params.quantityPerPage);
        const data = await listAllUsers(page, quantityPerPage);
        response
            .status(200)
            .json(data);
    } catch (e) {
        response
            .status(400)
            .json(e);
    }
});

module.exports = router;