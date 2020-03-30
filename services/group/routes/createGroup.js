const express = require('express');
const createGroup = require("../business/createGroup");
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const router = express.Router();

router.post('/', servicesAuthenticator, async (request, response) => {
    const user = request.user;
    const data = request.body;
    try {
        await createGroup(data, user);
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