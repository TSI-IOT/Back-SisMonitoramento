const User = require('../model/User');

module.exports = async () => {
    const users = await User.find();
    return users;
};