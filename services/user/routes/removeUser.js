const express = require('express');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const validationADMIN = require('../../../middlewares/validationADMIN');
const router = express.Router();
const removeUser = require('../business/removeUser');

router.delete('/id/:id', servicesAuthenticator, validationADMIN, async (request, response) => {
    try {
        await removeUser(request.params.id);
        response
            .status(200)
            .send()
    } catch (e) {
        response
            .status(400)
            .json(e)
    }
});

module.exports = router;