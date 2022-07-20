const {createStoreSchema, getStoreSchema} = require("../utils/middlewares/stores.middleware");
const {validateStoresError, authError} = require("../utils/errors/errors");

describe("createstore", () => {
    test("of wrong attributes should throw a validation error", () => {
        const req = {
            body: {
                name: "",
                cuit: "",
                concepts: [],
                currentBalance: 0,
                active: true,
                lastSale: new Date()
            }
        }
        expect(() => createStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of correct attributes should not throw a validation error", () => {
        const req = {
            body: {
                name: "comercio 1",
                cuit: "20123456789",
                concepts: [
                    {
                        name: "concepto 1",
                        price: 10
                    },
                    {
                        name: "concepto 2",
                        price: 20
                    }
                ],
                currentBalance: 100,
                active: true,
                lastSale: new Date().toISOString()
            }
        }
        expect(() => createStoreSchema(req, null, null)).not.toThrow(
            validateStoresError
        );
    });

    test("of wrong lenght cuit validation should failed", () => {
        const req = {
            body: {
                name: "comercio 1",
                cuit: "0",
                concepts: [
                    {
                        name: "concepto 1",
                        price: 10
                    },
                    {
                        name: "concepto 2",
                        price: 20
                    }
                ],
                currentBalance: 100,
                active: true,
                lastSale: new Date().toISOString()
            }
        }
        expect(() => createStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });


});


describe("get store", () => {
    test("of undefined limit and page validation should failed", () => {
        const req = {
            query: {}
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect limit and page format should failed", () => {
        const req = {
            query: {
                limit: "",
                page: ""
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect limit and page min value should failed", () => {
        const req = {
            query: {
                limit: 0,
                page: 0
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect limit min value should failed", () => {
        const req = {
            query: {
                limit: 0,
                page: 100
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect page format should failed", () => {
        const req = {
            query: {
                limit: 100,
                page: ""
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of correct limit and page min value and format should pass", () => {
        const req = {
            query: {
                limit: 10,
                page: 10
            }
        }
        expect(() => getStoreSchema(req, null, null)).not.toThrow(
            validateStoresError
        );
    });
});

//Validate user authentication
describe("auth middleware", () => {
    test("of undefined user and password validation should failed", () => {
        const req = {
            header: {}
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect limit and page format should failed", () => {
        const req = {
            query: {
                limit: "",
                page: ""
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect limit and page min value should failed", () => {
        const req = {
            query: {
                limit: 0,
                page: 0
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect limit min value should failed", () => {
        const req = {
            query: {
                limit: 0,
                page: 100
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of incorrect page format should failed", () => {
        const req = {
            query: {
                limit: 100,
                page: ""
            }
        }
        expect(() => getStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });

    test("of correct limit and page min value and format should pass", () => {
        const req = {
            query: {
                limit: 10,
                page: 10
            }
        }
        expect(() => getStoreSchema(req, null, null)).not.toThrow(
            validateStoresError
        );
    });
});
