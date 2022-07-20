const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('store created', async () => {
    const response = await api.get('/api/store');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body[0].name).toBe('store1');
    expect(response.body[1].name).toBe('store2');
    expect(response.body[2].name).toBe('store3');
});
