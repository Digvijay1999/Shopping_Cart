const {
    db_host,
    database,
    user,
    password,
    port } = require('../config/config');

const { Pool } = require('pg');

const pool = new Pool({
    db_host,
    database,
    user,
    password: "Digu@1234",
    port
})

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = {
    pool
}