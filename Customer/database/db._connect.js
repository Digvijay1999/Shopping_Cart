const { Pool } = require('pg');
const {
    DB_HOST,
    DATABASE,
    USER,
    PASSWORD,
    PORT
} = require('../config/environment');

const pool = new Pool({
    host: DB_HOST,
    database: DATABASE,
    user: USER,
    password: PASSWORD,
    port: PORT
})

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = {
    pool
}