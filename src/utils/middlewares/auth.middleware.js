const auth = require("basic-auth");
const {getUser} = require('../../controllers/user.controller');
const {authError} = require('../../utils/errors/errors');
const authenticate = async (req, res, next) => {
    try {
        //Authenticate the user
        const authUser = auth(req);
        if (!authUser) {
            throw new authError("Invalid credentials");
        }
      
        //Check if the user exists
        const user = await getUser(authUser.name);
        if (!user) {
            throw new authError("Invalid Username or Password");
        }

        if (user.verifyPassword(authUser.pass)) {
            next();
        } else {
            throw new authError("Invalid Username or Password");
        }
    } catch (error) {
        console.log(error.msg);
        next(error);
    }
};

module.exports = {authenticate};

