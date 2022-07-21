const StoreSchema = require("../models/store");
const { createRandomStores } = require('../utils/factories/store.factory');
const { server } = require("../app");
const supertest = require("supertest");
const api = supertest(server);

const insertStores = async () => {
    await StoreSchema.insertMany(createRandomStores());
};

const invalidStore = {
    name: "comercio 1",
    cuit: "0",
    concepts: [
        {
            name: "concepto tiendas",
            price: 10,
            order: 1
        },
        {
            name: "concepto productos",
            price: 20,
            order: 2
        }
    ],
    currentBalance: 100,
    active: true,
    lastSale: new Date().toISOString()
};

const validStore = {
    name: "comercio 1",
    cuit: "20123456789",
    concepts: [
        {
            name: "Concepto productos",
            price: 20,
            order: 1
        },
        {
            name: "Concepto tienda",
            price: 10,
            order: 2
        }
    ],
    currentBalance: 100,
    active: true,
    lastSale: "2022-07-20"
};

module.exports = {
    api,
    invalidStore,
    validStore,
    insertStores
};
