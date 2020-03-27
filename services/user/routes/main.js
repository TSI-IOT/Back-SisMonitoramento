const createUser = require('./createUser');
const listAllUsers = require('./listAllUsers');
const authenticateUser = require('./authenticateUser');
const removeUser = require('./removeUser');

module.exports = [
    createUser,
    listAllUsers,
    authenticateUser,
    removeUser
];