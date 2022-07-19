const { insertStore, listStores } = require("../repository/store.repository");
const {logger} = require('../utils/logger');
const {formatResponse} = require('../utils/formatResponse');

const createStore = async (req, res) => {
    try {
        const inserted = await insertStore(req.body);
        if (inserted) {
            return res.status(200).json({ message: 'The store was created successfully' });
        }
        return res.status(401).json({ message: 'Failed to insert store' });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStores = async (req, res) => {
    const { page, limit } = req.query;
    try {
        const stores = await listStores(page || 1, limit || 10);
        if (stores) {
            return res.status(200).json(formatResponse(stores));
        }
        return res.status(401).json({message: 'Failed to get stores'});
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = { createStore, getStores };
