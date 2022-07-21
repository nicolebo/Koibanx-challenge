const {createStoreSchema, getStoreSchema} = require("../utils/middlewares/stores.middleware");
const {validateStoresError} = require("../utils/errors/errors");
const {formatResponse} = require("../utils/formatResponse");

describe("create store", () => {
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
            }
        }
        expect(() => createStoreSchema(req, null, null)).toThrow(
            validateStoresError
        );
    });


});


//Validate user authentication
describe("formatter response", () => {
    test("of a valid store must be the same with fields formatted", () => {
        const store = [{
                _id: "5e9f8f8f8f8f8f8f8f8f8f8",
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
        }]
        expect(formatResponse(store)).toStrictEqual([
            {
                "id":"5e9f8f8f8f8f8f8f8f8f8f8",
                "comercio": "comercio 1",
                "cuit": "20123456789",
                "conceptos": [
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
                "balance actual": "$100.00",
                "activo": "Si",
                "ultima venta": "2022-07-20"
            }
        ]);
    });

    test("of a null store must return empty array", () => {
        const comercios = [];
        expect(formatResponse(comercios)).toStrictEqual([]);
    });
});
