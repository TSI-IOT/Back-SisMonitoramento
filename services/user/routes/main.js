const createUser = require('./createUser');
const listAllUsers = require('./listAllUsers');
const authenticateUser = require('./authenticateUser');

module.exports = [
    createUser,
    listAllUsers,
    authenticateUser
];