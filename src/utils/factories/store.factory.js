const faker = require('@faker-js/faker');

const createRandomStores = () => {
    const stores = [];
    Array.from({ length: 10 }).forEach(() => {
        stores.push({
            name: faker.faker.company.companyName(),
            cuit: faker.faker.random.numeric({ min: 100000000, max: 99999999999 }),
            concepts: [{
                concept: faker.faker.random.word(),
                price: faker.faker.commerce.price(),
                order: faker.faker.random.numeric({min: 0, max: 100}),
                },
                {
                    concept: faker.faker.random.word(),
                    price: faker.faker.commerce.price(),
                    order: faker.faker.random.numeric({min: 0, max: 100}),
                },
                {
                    concept: faker.faker.random.word(),
                    price: faker.faker.commerce.price(),
                    order: faker.faker.random.numeric({min: 0, max: 100}),
                }
                ],
            currentBalance: faker.faker.commerce.price(),
            active: faker.faker.datatype.boolean(),
            lastSale: faker.faker.date.past()
        });
    });
    return stores
}

module.exports = {createRandomStores};
