import * as pg from 'pg';
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  "dialect": "postgres",
  "dialectModule": pg,
  "host": process.env.POSTGRES_HOST,
  "username": process.env.POSTGRES_USER,
  "password": process.env.POSTGRES_PASS
})

export async function me(event) {
  return {
    statusCode: 200
  }
}