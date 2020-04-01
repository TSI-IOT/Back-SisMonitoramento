const express = require('express');
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');
const createDevice = require('../business/createDevice');

const router = express.Router();

router.post('/', servicesAuthenticator, async (request, response) => {
        try {
            await createDevice(request.user.id, request.body);
            response
                .status(200)
                .send();
        } catch (error) {
            response
                .status(400)
                .json(error);
        }
    }
);

module.exports = router;
