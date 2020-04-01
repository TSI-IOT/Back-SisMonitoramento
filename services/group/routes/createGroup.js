const express = require('express');
const createGroup = require("../business/createGroup");
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const router = express.Router();

router.post('/', servicesAuthenticator, async (request, response) => {
    try {
        await createGroup(request.user.id, request.body);
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