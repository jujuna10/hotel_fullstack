// const { Pool } = require("pg");
// import dotenv from 'dotenv';

// dotenv.config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: Number(process.env.DB_PORT)
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
    user: 'postgres',
    password: 'jujuna10',
    host: 'localhost',
    port: 5432,
    database:"hotel"
});

export default pool
