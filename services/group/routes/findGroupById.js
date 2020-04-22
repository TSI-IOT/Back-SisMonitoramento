const express = require('express');
const servicesAuthenticator = require("../../../middlewares/servicesAuthenticator");
const findGroupById = require("../business/findGroupById");
const router = express.Router();

router.get('/id/:id', servicesAuthenticator, async (request, response) => {
    try {
        const group = await findGroupById(request.user.id,request.params.id);
        response
            .status(200)
            .json(group);
    } catch (error) {
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;
