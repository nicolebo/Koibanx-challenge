const { findUser } = require("../repository/user.repository");

const getUser = (username) => {
    try {
        const user = findUser(username);
        if (user != null) {
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error)
    }
};
module.exports = { getUser };
