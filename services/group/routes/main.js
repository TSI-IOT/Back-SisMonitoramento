const createGroup = require('./createGroup');
const listGroupsByUserId = require('./listGroupsByUserId');
const removeGroup = require('./removeGroup');
const findGroupById = require('./findGroupById');

module.exports = [
    createGroup,
    listGroupsByUserId,
    removeGroup,
    findGroupById
];