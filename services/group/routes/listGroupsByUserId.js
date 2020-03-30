const express = require('express');
const servicesAuthenticator = require("../../../middlewares/servicesAuthenticator");
const listGroupsByUserId = require("../business/listGroupsByUserId");
const router = express.Router();

router.get('/page/:page/quantityPerPage/:quantityPerPage', servicesAuthenticator, async (request, response) => {
    try {
        const page = new Number(request.params.page);
        const quantityPerPage = new Number(request.params.quantityPerPage);
        const user = request.user;
        const groups = await listGroupsByUserId(user.id, page, quantityPerPage);

        response
            .status(200)
            .json(groups);
    } catch (error) {
        response
            .status(400)
            .send(error);
    }
});

module.exports = router;
