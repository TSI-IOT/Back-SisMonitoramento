const express = require('express');
const router = express.Router();
const removeGroup = require('../business/removeGroup');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');


router.delete('/id/:id', servicesAuthenticator, async (request, response) => {

    try {
        const user = request.user;
        await removeGroup(user, request.params.id);
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