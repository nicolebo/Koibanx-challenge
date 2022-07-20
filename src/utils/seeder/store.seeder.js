var seeder = require('mongoose-seed');
const dotenv = require('dotenv');
dotenv.config();
const { createRandomStores } = require('../factories/store.factory');
const config = require("config");
var model = [
    {
        model: 'Store',
        documents: createRandomStores(),
    },
];

seeder.connect(
    'mongodb://' + config.get('mongodb.address') + '/' + config.get('mongodb.dbname'),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    function () {
        seeder.loadModels(['models/store.js']);
        seeder.clearModels(['Store'], function () {
            seeder.populateModels(model, function () {
                seeder.disconnect();
            });
        });
    },
);
