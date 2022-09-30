const cookieParser = require('cookie-parser');

const {
    createCustomer,
    signToken,
    getId
} = require('../services/User')

const signup = async (req, res) => {
    console.log("signing up user " + req.body.username);
    await createCustomer(req);
    let customerId = await getId(req.body.username);
    console.log("New user created username: " + customerId);
    let token = signToken(req.body, customerId);
    res.cookie('AuthToken', token, { httpOnly: true })
    return;
}

const login = (req, res) => {

}

const profile = (req, res) => {

}

module.exports = {
    signup,
    login,
    profile
}