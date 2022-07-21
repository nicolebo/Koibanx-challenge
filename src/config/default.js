module.exports = {
  'port': process.env.PORT || 3000,
  'mongodb': {
    'username': process.env.DATABASE_USERNAME,
    'password': process.env.DATABASE_PASSWORD,
    'host': process.env.DATABASE_HOST || 'mongo',
    'port': process.env.DATABASE_PORT || '3000',
    'dbname': process.env.DATABASE_DBNAME || 'test',
    'address': process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT,
    'uri': process.env.DATABASE_URI | ""
  },
};
