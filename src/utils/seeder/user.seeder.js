const User = require('../../models/user')
const logger = require('../../utils/logger')

const init = async function () {
    if (await User.countDocuments({"username": "test@koibanx.com"})) {
        return
    }

    let user = new User();
    user.username = "test@koibanx.com";
    user.password = "test123";
    await User.create(user);

    logger.info("Test User created")
}

module.exports = {init};
