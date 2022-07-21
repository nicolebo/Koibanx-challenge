const swaggerAutogen = require('swagger-autogen')()

const outputFile = './api.json'
const endpointsFiles = ['src/routes/stores.js']

swaggerAutogen(outputFile, endpointsFiles)
