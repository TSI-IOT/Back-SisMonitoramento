const User = require('../model/User');

module.exports = async (id) => {
    const user = await User.findById(id).select('-password');
    return user;
}