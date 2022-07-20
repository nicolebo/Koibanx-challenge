const Joi = require('joi');
const {validateStoresError} = require("../errors/errors");


function getStoreSchema(req, res, next) {
    const schema = Joi.object({
        page: Joi.number().required(),
        limit: Joi.number().required()
    });
    validateRequest(req.query, next, schema);
}

function createStoreSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        cuit: Joi.string().min(11).max(11).required(),
        concepts: Joi.array().required(),
        currentBalance : Joi.number().required(),
        active: Joi.boolean().required(),
        lastSale: Joi.date().iso().required()
    });
    validateRequest(req.body, next, schema);
}

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };

    const { error } = schema.validate(req, options);
    if (error) {
        throw new validateStoresError(error.details.map(x => x.message).join(', '));
    } else {
        next();
    }
}

module.exports = {createStoreSchema, getStoreSchema}
