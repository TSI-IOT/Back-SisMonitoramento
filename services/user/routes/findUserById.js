const express = require('express');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationADMIN = require('../../../middlewares/validationADMIN');
const findUserById = require('../business/findUserById');

router.get('/id/:id', servicesAuthenticator, async (request, response) => {
    try {
        const user = await findUserById(request.params.id);
        return response
            .status(200)
            .json(user);
    } catch (errors) {
        response
            .status(404)
            .json(errors);
    }
});

module.exports = router;