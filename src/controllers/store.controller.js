const { insertStore, listStores } = require("../repository/store.repository");
const logger = require('../utils/logger');

const createStore = async (req, res) => {
    try {
        const inserted = await insertStore(req.body);
        if (inserted) {
            res.status(200).json({ message: 'The store was created successfully' });
        }else {
            res.status(500).json({ message: 'The store was not created' });
        }
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStores = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const stores = await listStores(page, limit);
        res.json(stores);
    } catch (error) {
        logger.error(error.message);
        res.status(500).send({message: error.message});
    }
};
module.exports = { createStore, getStores };
