
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotenv.config({ path: configFile });
} else {
    const configFile = `./.env.dev`;
    dotenv.config(configFile)
}

module.exports = {
    jwtKey: process.env.JWT_SECREAT,
    db_host: process.env.DB_HOST,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port
}