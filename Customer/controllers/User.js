const customerServices = require('../services/User')
const Auth = require("../services/Auth")

const signup = async (req, res) => {

    await customerServices.createCustomer(req);
    let customerId = await customerServices.getId(req.body.username);
    let token = Auth.signToken(req.body, customerId);

    res.cookie('AuthToken', token, { httpOnly: true })
    res.end("signed up Token is :" + token);
}

const login = async (req, res) => {

    let user = await customerServices.checkUsername(req);

    if (user != undefined) {
        console.log(user + " user exists ");

        let pass = await customerServices.CheckPassword(req)
        if (pass == true) {
            console.log("password matched");
            console.log("user verified returning token");
            let customerId = await customerServices.getId(req.body.username);
            let token = Auth.signToken(req.body, customerId);
            res.cookie('AuthToken', token, { httpOnly: true })
            res.end(token)
        } else {
            res.end("username or password is incorrect")
            return;
        }
    } else {
        res.end("username or password is incorrect")
        return;
    }
}

const profile = async (req, res) => {
    let data = await customerServices.getUserDetails(req.cookies.AuthToken);
    res.json(data);
    res.end();
}

module.exports = {
    signup,
    login,
    profile
}