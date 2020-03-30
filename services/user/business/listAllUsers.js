const User = require('../model/User');

module.exports = async (page, quantityPerPage) => {
    const users = await User
        .find()
        .limit(quantityPerPage)
        .skip(quantityPerPage * page)
        .select('-password')
        .sort({
            date: 'asc'
        });

    if (!users) {
        throw await error([{msg: 'Nenhum registro encontrado!'}]);
    }

    return users;
};