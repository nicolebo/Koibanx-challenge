const Joi = require('joi');
const createStoreSchema = Joi.object().keys(
    {
        name: Joi.string().required(),
        cuit: Joi.string().min(13).max(13).required(),
        concepts: Joi.array().items(Joi.string()).required(),
        currentBalance : Joi.number().required(),
        active: Joi.boolean().required(),
        lastSale: Joi.date().iso().required(),
    }
)
module.exports = createStoreSchema;
