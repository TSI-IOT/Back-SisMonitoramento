const express = require('express');
const authenticator = require("../../../middlewares/servicesAuthenticator");
const listGroupsByUserId = require('../business/listGroupsByUserId');
const router = express.Router();

router.get('/page/:page/quantityPerPage/:quantityPerPage', authenticator, async (request, response) => {
    try {
        const page = new Number(request.params.page);
        const quantityPerPage = new Number(request.params.quantityPerPage);
        const user = request.user;
        const groups = await listGroupsByUserId(user._id, page, quantityPerPage);

        if (!groups) {
            return response
                .status(404)
                .send();
        }

        response
            .status(200)
            .json(groups);

    } catch (errors) {
        console.log(errors);
        response
            .status(400)
            .send();
    }
});

module.exports = router;
