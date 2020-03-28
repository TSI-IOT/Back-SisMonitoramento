const createGroup = require('./createGroup');
const listGroupsByUserId = require('./listGroupsByUserId');
const removeGroup = require('./removeGroup');

module.exports = [
    createGroup,
    listGroupsByUserId,
    removeGroup
];