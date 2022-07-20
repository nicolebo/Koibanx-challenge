const storeModel = require('../models/store');
const {formatResponse} = require("../utils/formatResponse");

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
    const models = await storeModel.paginate({}, options);
    return {
        data: formatResponse(models.docs),
        page: models.page,
        pages: models.totalPages,
        limit: limit,
        total: models.totalDocs,
    };
}

module.exports = {
    insertStore,
    listStores
};
