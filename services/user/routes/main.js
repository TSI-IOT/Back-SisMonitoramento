const createUser = require('./createUser');
const listAllUsers = require('./listAllUsers');
const authenticateUser = require('./authenticateUser');
const removeUser = require('./removeUser');
const findUserById = require('./findUserById');

module.exports = [
    createUser,
    listAllUsers,
    authenticateUser,
    removeUser,
    findUserById
];