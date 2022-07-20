const authMiddleware = require("basic-auth");
const userService = require('../../controllers/user.controller');

const authenticate = async (req, res, next) => {
    try {
        //Authenticate the user
        const authUser = authMiddleware(req);
        if (!authUser) {
            res.status(401).json({ error: 'Invalid credentials' });
        }

        //Check if the user exists
        const user = await userService.getUser(authUser.name);
        if (!user || user.verifyPassword(authUser.password)) {
            res.status(401).json({ error: 'Invalid Username or Password' });
        }
        next();
    } catch (error) {
        next(error.msg);
    }
};

module.exports = {authenticate};

