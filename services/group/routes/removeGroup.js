const express = require('express');
const router = express.Router();
const removeGroup = require('../business/removeGroup');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');


router.delete('/id/:id', servicesAuthenticator, async (request, response) => {

    try {
        const user = request.user;
        await removeGroup(user.id, request.params.id);
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