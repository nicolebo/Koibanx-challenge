const mongoose = require('mongoose');
const logger = require('./utils/logger');
const errorsMiddleware = require('./utils/middlewares/errors.middleware');
mongoose.Promise = Promise;

const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

// If exists uri in config file, use it, else use localhost
const uri = process.env.DATABASE_URI;
if(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
} else {
    mongoose.connect("mongodb://" +process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT+ "/" +  process.env.DATABASE_DBNAME, { useNewUrlParser: true, useUnifiedTopology: true });
}

require("./utils/seeder/user.seeder").init();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/stores'));

app.use(errorsMiddleware);

// Start the server
const server = app.listen(process.env.PORT);
logger.info('API initialized on port ' + process.env.PORT);

module.exports = { app, server };
