const jwt = require('jsonwebtoken')
const { jwtKey } = require('../config/config')
const { pool } = require('../database/db._connect');

async function createCustomer(req) {
    await pool.query(`INSERT INTO customer (user_id,username,password,address) 
    VALUES (DEFAULT,'${req.body.username}','${req.body.password}','${req.body.address}'1)`)
}

async function getId(username) {
    let res = await pool.query(`SELECT user_id FROM customer WHERE username = ${username}`)
        .then(() => { console.log("row inserted") })
        .catch((err) => { console.log("error occured " + err); })
    return res[0].user_id;
}

function signToken(body, id) {
    return jwt.sign({ user: body.username, id: id }, jwtKey, { expiresIn: '24h' })
}

module.exports = {
    createCustomer,
    signToken,
    getId
}