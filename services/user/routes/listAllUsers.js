const express = require('express');
const listAllUsers = require('../business/listAllUsers');
const router = express.Router();
const servicesAuthenticator = require('../../../middlewares/servicesAuthenticator');

router.get('/', servicesAuthenticator, async (request, response) => {
    try {
        const data = await listAllUsers();
        response.status(200).json(data);
    } catch (e) {
        response.status(400).json([{msg: e}]);
    }
});

module.exports = router;