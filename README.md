#  Koibanx Backend Challenge

##  Descripción

This is a REST service done with Node.js, Express y Mongoose.

This Api allows you to obtain and store information from Businesses

##  Install

Clone repo:

```bash
> git clone https://github.com/nicolebo/Koibanx-challenge.git
> cd Koibanx-challenge
```
###  First Steps
```bash
# The first thing to do is:
> make first
```
```bash
# run service:
> make start
```
```bash
# run test:
> make test
```
```bash
# seed database:
> make seed
```

###    Manual Installation
Add the environment variables:
```bash
cp .env.example .env
# open .env and modify the environment variables (if needed)
```
Install dependencies:
```bash
npm install
```

##  Table of Contents

- [Features](#Features)

- [Environment Variables](#Environment-Variables)

- [Project Structure](#Project-Structure)

- [API Endpoints](#API-Endpoints)

##  Features
- **NoSQL database**: Data object modeling using Mongoose
- **Validation**: Request data validation using Joi
- **Testing**: Unit tests and integration tests using Jest and supertest
- **Error handling**: centralized error handling mechanism
- **Docker support**


## Environment Variables
Environment variables can be found and modified in the `.env` file.

```bash
#Docker image name
IMAGE=koi-api
# Username of the Mongo DB:
DATABASE_USERNAME=
# Password of the Mongo DB:
DATABASE_PASSWORD=
#Internal hostname (default: mongo)
DATABASE_HOST=mongo
#Database internal port (default: 27017)
DATABASE_PORT=27017
#Database name
DATABASE_DBNAME=stores-api
#Port for the API (default: 3000)
PORT=3000
#In case of not using Docker, the hostname can be specified here, else leave commented:
#DATABASE_URI=mongodb://localhost:27017/stores-api # optional
```

##  Project structure
```
src\
|--config\ # Environment variables and configuration related things
|--controllers\ # controller layer
|--models\ # data layer
|--repositories\ # repository layer
|--routes\ # Routes
|--Test\ # Unit and integration test
|--utils\ # Utility classes and functions
	|--errors\ # custom errors
	|--factories\ # factories
	|--middlewares\ # Custom middlewares
	|--seeders\ # seeders
|--app.js # Express app

```
##  Endpoints
`GET /api/stores` - get all stores
`POST /api/stores` - create a Store
