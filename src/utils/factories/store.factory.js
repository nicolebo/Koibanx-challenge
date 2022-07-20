import { faker } from '@faker-js/faker';

function createRandomStores() {
    const stores = [];
    Array.from({ length: 10 }).forEach(() => {
        stores.push({
            name: faker.company.companyName(),
            cuit: faker.random.number({ min: 100000000, max: 99999999999 }),
            concepts: [{
                concept: faker.commerce.productName(),
                price: faker.commerce.price(),
                },
                {
                    concept: faker.commerce.productName(),
                    price: faker.commerce.price(),
                },
                {
                    concept: faker.commerce.productName(),
                    price: faker.commerce.price(),
                }
                ],
            currentBalance: faker.commerce.price(),
            active: faker.random,
            lastSale: faker.date.past()
        });
    });
    return stores
}
