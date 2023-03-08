// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const db = {
  "dialect": "postgres",
  "host": process.env.POSTGRES_HOST,
  "username": process.env.POSTGRES_USER,
  "password": process.env.POSTGRES_PASS
}

module.exports = {
  development: db,
  production: db
}
