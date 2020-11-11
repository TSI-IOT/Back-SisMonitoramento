const Group = require("../model/Group");
const error = require('../../../utils/error');

module.exports = async (userId, data) => {
    const exists = await Group.exists({title: data.title, userId: userId, active: true});

    if (exists) {
        throw await error([{msg: 'Já existe um grupo com o mesmo título cadastrado!'}]);
    }

    const group = new Group(data);
    group.userId = userId;

    await group.save();
};