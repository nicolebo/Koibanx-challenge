const ERROR_HANDLERS = {
    validateStoresError: (res, { message }) => res.status(400).send({ error: message }),

    authError: (res, { message }) => res.status(401).send({ error: message }),

    defaultError: (res, error) => {
        console.error(error.name);
        console.log(error.message);
        console.log(error.stack);
        res.status(500).send("Internal server error");
    },
};

module.exports = (err, req, res, next) => {
    const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError;
    handler(res, err);
};
