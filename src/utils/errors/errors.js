class authError extends Error {
    constructor(message) {
        super(message);
        this.name = "authError";
    }
}

class validateStoresError extends Error {
    constructor(message) {
        super(message);
        this.name = "validateStoresError";
    }
}

module.exports = {validateStoresError, authError};
