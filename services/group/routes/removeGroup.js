const express = require('express');
const router = express.Router();
const removeGroup = require('../business/removeGroup');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');


router.delete('/title/:title/id/:id', servicesAuthenticator, async (request, response) => {
    try {
        await removeGroup(request.user.id, request.params.title, request.params.id);
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