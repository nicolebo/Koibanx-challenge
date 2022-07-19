const express = require('express');
const router = express.Router();

const { authenticate } = require("../utils/middlewares/auth");
const { createStoreSchema } = require("../utils/middlewares/stores.validator");
const { createStore, getStores } = require("../controllers/store.controller");

router.route('/stores')
  .get(authenticate)
    .post(createStoreSchema, authenticate, createStore);

module.exports = router;
