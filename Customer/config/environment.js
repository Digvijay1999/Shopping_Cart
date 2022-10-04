// const dotenv = require('dotenv');
// const path = require('path');

// if (process.env.NODE_ENV !== 'prod') {
//     const configFile = `./.env.${process.env.NODE_ENV}`;
//     dotenv.config({ path: configFile });
// } else {
//     const configFile = '.env.dev';
//     dotenv.config()
// }

require("dotenv").config({
    path: `.env.development`,
})
console.log(process.env.USER);

module.exports = {
    JWT_SECREAT: process.env.JWT_SECREAT,
    DB_HOST: process.env.DB_HOST,
    DATABASE: process.env.DATABASE,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    PORT: process.env.PORT
}
