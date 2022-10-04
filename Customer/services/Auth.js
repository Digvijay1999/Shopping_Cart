const jwt = require('jsonwebtoken')
const { JWT_SECREAT } = require('../config/environment')

function signToken(body, id) {
    let token = jwt.sign({ user: body.username, id: id }, JWT_SECREAT, { expiresIn: '24h' })
    return token;
}

function verifyToken(token) {
    try {
        let data = jwt.verify(token, JWT_SECREAT)
        return data;
    } catch (error) {
        return false;
    }
}

module.exports = {
    signToken,
    verifyToken
}