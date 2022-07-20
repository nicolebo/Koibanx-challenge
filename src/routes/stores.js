const express = require('express');
const router = express.Router();

const { authenticate } = require("../utils/middlewares/auth.middleware");
const { createStore, getStores } = require("../controllers/store.controller");
const {getStoreSchema, createStoreSchema} = require("../utils/middlewares/stores.middleware");

router.route('/stores')
  .get(getStoreSchema, authenticate, getStores)
    .post(createStoreSchema, authenticate, createStore);

module.exports = router;
