const { pool } = require('../database/db._connect')
const Auth = require('./Auth')

async function createCustomer(req) {
    await pool.query(`INSERT INTO customer (user_id,username,password,address) 
    VALUES (DEFAULT,'${req.body.username}','${req.body.password}','${req.body.address}')`)
}

async function getId(username) {
    let res = await pool.query(`SELECT user_id FROM customer WHERE username = '${username}'`)

    if (res.rowCount == 0) {
        return null
    } else {
        return res.rows[0].user_id;
    }
}

const checkUsername = async function (req) {

    let { username } = req.body
    let res = await pool.query(`SELECT username FROM customer WHERE username = '${username}'`);
    if (res.rowCount != 0) {
        return res.rows[0].username
    } else {
        return undefined
    }
};

const CheckPassword = async function (req) {
    let { username, password } = req.body
    let res = await pool.query(`SELECT password FROM customer WHERE username = '${username}'`)
    if (res.rowCount != 0) {
        if (res.rows[0].password == password) {
            return true
        }
    } else {
        return false
    }
}

const getUserDetails = async function (token) {
    let data = Auth.verifyToken(token)
    console.log(data);
    let username
    if (data) {
        username = data.user
        try {
            let res = await pool.query(`SELECT * FROM customer WHERE username = '${username}'`)
            return res.rows[0];
        } catch (error) {
            console.log(error);
            return;
        }
    } else {
        return false
    }
}

module.exports = {
    createCustomer,
    getId,
    checkUsername,
    CheckPassword,
    getUserDetails
}

