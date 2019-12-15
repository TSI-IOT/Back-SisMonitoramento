const express = require('express');
const createUser = require('../business/createUser');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const validations = [
    check('email').isEmail(),
    check('password').isLength({min: 6})
];

router.post('/', validations, async (request, response) => {
    const data = request.body;
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            throw errors
        }
        await createUser(data);
        response.status(200).send();
    } catch (e) {
        response.status(400).json(e);
    }
});

module.exports = router;