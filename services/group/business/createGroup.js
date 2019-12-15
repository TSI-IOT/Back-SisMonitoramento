const Group = require("../model/Group");

module.exports = async (data, user) => {
    const group = new Group(data);
    group.userId = user;
    await group.save();
};