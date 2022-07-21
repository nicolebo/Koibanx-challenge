const mongoose = require("mongoose");
const { api, invalidStore, validStore , insertStores } = require("./helper");
const StoreSchema = require("../models/store");
const { server } = require("../app");
jest.setTimeout(100000);

beforeEach(async () => {
    await StoreSchema.deleteMany({});
    await insertStores();
});

describe("auth middleware", () => {
    test("with incorrect auth parameters should throw a 400 error", async () => {
        await api
            .get('/api/stores?q={"page": 2, "limit": 5}')
            .auth("example@example.com.ar", "password")
            .expect(401);
    });
    test("with correct auth parameters should return a 200 status", async () => {
        await api
            .get('/api/stores?q={"page": 2, "limit": 5}')
            .auth("test@koibanx.com", "admin")
            .expect(200);
    });
    test("without auth should return 400 error", async () => {
        await api
            .get('/api/stores?q={"page": 2, "limit": 5}')
            .expect(401);
    });
});

describe("create a store", () => {
    test("with invalid params should not persist in database", async () => {
        await api
            .post("/api/stores")
            .send(invalidStore)
            .auth("test@koibanx.com", "admin")
            .expect(400);
    });
    test("with valid params should not throw a error", async () => {
        await api
            .post("/api/stores")
            .send(validStore)
            .auth("test@koibanx.com", "admin")
            .expect(200);
    });
});

describe("get stores", () => {
    test("should return 5 pages", async () => {
        const res = await api
            .get('/api/stores?q={"page": 5, "limit": 2}')
            .auth("test@koibanx.com", "admin")
            .expect(200);
        expect(res.body.pages).toBe(5);
    });
    test("should return 10 documents", async () => {
        const res = await api
            .get('/api/stores?q={"page": 5, "limit": 2}')
            .auth("test@koibanx.com", "admin")
            .expect(200);
        expect(res.body.total).toBe(10);
    });
    test("should return only 1 document", async () => {
        const res = await api
            .get('/api/stores?q={"page": 5, "limit": 1}')
            .auth("test@koibanx.com", "admin")
            .expect(200);
        expect(res.body.data.length).toBe(1);
    });
});

afterAll(() => {
    mongoose.connection.close();
    server.close();
});
