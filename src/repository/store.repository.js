const storeModel = require('../models/store');

const insertStore = async (store) => {
    const createdStore = await storeModel.create(store);
    if (createdStore) {
        return true;
    }
    return null;
};
const listStores = async (page, limit) => {
    const options = {
        page: page,
        limit: limit,
    };
    return storeModel.paginate({}, options)
}

module.exports = {
    insertStore,
    listStores
};
