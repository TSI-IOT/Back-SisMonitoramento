const User = require('../model/User');

module.exports = async (page, quantityPerPage) => {
    const users = await User
        .find()
        .limit(quantityPerPage)
        .skip(quantityPerPage * page)
        .sort({
            date:'asc'
        });
    return users;
};