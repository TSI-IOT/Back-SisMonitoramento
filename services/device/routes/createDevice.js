const express = require('express');
const authenticator = require('../../../middlewares/servicesAuthenticator');
const findUserById = require('../../user/business/findUserById');
const createDevice = require('../business/createDevice');

const router = express.Router();

//@route    POST device
//@desc     Create a new device
//@access   Public
router.post('/', authenticator, async (request, response) => {
        try {
            await createDevice(request.user, request.body);
            response
                .status(200)
                .send();
        } catch (errors) {
            console.log(errors);
            response
                .status(400)
                .json({errors: errors});
        }
    }
);

module.exports = router;
