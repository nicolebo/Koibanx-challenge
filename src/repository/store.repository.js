const storeModel = require('../models/store');

const insertStore = async (store) => {
    const createdStore = await storeModel.create(store);
    if (createdStore) {
        return true;
    }
    return null;
};

module.exports = {
    insertStore,
};
