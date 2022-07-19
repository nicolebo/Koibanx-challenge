const auth = require("basic-auth");
const userService = require('../../controllers/user.controller');

const authenticate = async (req, res, next) => {
    try {
        //Authenticate the user
        const authUser = auth(req);
        if (!authUser) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        //Check if the user exists
        const user = await userService.getUser(authUser.name);
        if (!user || user.verifyPassword(authUser.password)) {
            return res.status(401).json({ error: 'Invalid Username or Password' });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = authenticate;
