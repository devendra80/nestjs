import * as dotenv from 'dotenv';
import { IDatabaseConfig } from '../interfaces/IDatabaseConfig';

dotenv.config();

const dbconfig: IDatabaseConfig = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: process.env.DIALECT,
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: process.env.DIALECT,
  },
};

export default dbconfig;