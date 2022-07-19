const logger = require('../utils/logger');
const express = require('express');
const router = express.Router();

const { authenticate } = require("../utils/middlewares/auth");

router.route('/stores')
  .get(authenticate, function(){logger.info("pending use case")})
    .post(authenticate, function(){logger.info("pending use case")});

module.exports = router;
