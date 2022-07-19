const userModel = require('../models/user');

const findUser = async (username) => {
    const user = await userModel.findOne({username});
    if (user) {
        return user;
    }
    return null;
};

module.exports = {
    findUser,
};
