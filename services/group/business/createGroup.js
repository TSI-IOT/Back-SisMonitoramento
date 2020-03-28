const Group = require("../model/Group");
const error = require('../../../utils/error');

module.exports = async (data, user) => {
    const group = new Group(data);
    group.userId = user;

    const exists = await Group.exists({title: group.title, userId: group.userId});

    if (exists) {
        throw await error([{msg: 'Já existe um grupo com o mesmo título cadastrado!'}]);
    }
    await group.save();
};